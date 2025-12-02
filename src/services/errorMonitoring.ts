import type { ErrorInfo } from "react";

interface ErrorDetails {
  message: string;
  stack?: string;
  componentStack?: string;
  url: string;
  timestamp: number;
  userAgent: string;
  additionalInfo?: Record<string, unknown>;
}

class ErrorMonitoringService {
  private static instance: ErrorMonitoringService;
  private isInitialized = false;
  private errorQueue: ErrorDetails[] = [];
  private readonly MAX_QUEUE_SIZE = 10;
  private readonly FLUSH_INTERVAL = 30000; // 30 seconds
  private flushIntervalId: number | null = null;
  private globalErrorHandler: (event: ErrorEvent) => void;
  private unhandledRejectionHandler: (event: PromiseRejectionEvent) => void;

  private constructor() {
    // Bind the handlers to the instance
    this.globalErrorHandler = this.handleGlobalError.bind(this);
    this.unhandledRejectionHandler = this.handleUnhandledRejection.bind(this);
  }

  public static getInstance(): ErrorMonitoringService {
    if (!ErrorMonitoringService.instance) {
      ErrorMonitoringService.instance = new ErrorMonitoringService();
    }
    return ErrorMonitoringService.instance;
  }

  public init(appEnvironment = 'development'): void {
    if (this.isInitialized) return;

    // Set up global error handlers
    window.addEventListener('error', this.globalErrorHandler);
    window.addEventListener('unhandledrejection', this.unhandledRejectionHandler);

    // Set up interval to flush errors
    this.flushIntervalId = window.setInterval(() => {
      this.flushErrors();
    }, this.FLUSH_INTERVAL);

    this.isInitialized = true;
    console.info(`🔍 Error monitoring initialized (${appEnvironment})`);
    
    // Add shutdown handler
    window.addEventListener('beforeunload', () => {
      // Flush any remaining errors before page unload
      this.flushErrors();
    });
  }

  public captureError(
    error: Error, 
    errorInfo?: ErrorInfo, 
    additionalInfo?: Record<string, unknown>
  ): void {
    // Don't capture if not initialized
    if (!this.isInitialized) {
      console.warn("Error monitoring service not initialized");
      return;
    }

    const errorDetails: ErrorDetails = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      additionalInfo: {
        ...additionalInfo,
        // Add page visibility state and network information
        pageVisible: document.visibilityState === 'visible',
        online: navigator.onLine,
        referrer: document.referrer,
      }
    };

    this.errorQueue.push(errorDetails);
    
    // Keep queue size under control
    if (this.errorQueue.length > this.MAX_QUEUE_SIZE) {
      this.flushErrors();
    }
    
    // Log to console in development
    if (process.env.NODE_ENV !== 'production') {
      console.group('Error captured by monitoring service');
      console.error(error);
      if (errorInfo) console.error(errorInfo);
      console.groupEnd();
    }
  }

  public captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info'): void {
    // Don't capture if not initialized
    if (!this.isInitialized) return;

    const details: ErrorDetails = {
      message: `[${level.toUpperCase()}] ${message}`,
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent
    };
    
    this.errorQueue.push(details);
  }

  private handleGlobalError(event: ErrorEvent): void {
    event.preventDefault();
    const error = new Error(event.message);
    error.stack = event.error?.stack;
    
    this.captureError(error, undefined, {
      lineNo: event.lineno,
      colNo: event.colno,
      filename: event.filename
    });
  }

  private handleUnhandledRejection(event: PromiseRejectionEvent): void {
    event.preventDefault();
    const error = event.reason instanceof Error 
      ? event.reason 
      : new Error(String(event.reason));
    
    this.captureError(error, undefined, {
      type: 'unhandledRejection'
    });
  }

  private flushErrors(): void {
    if (this.errorQueue.length === 0) return;
    
    // In a real implementation, this would send errors to a backend service
    // For now, we'll just log them to console
    if (process.env.NODE_ENV !== 'production') {
      console.log(`📤 Flushing ${this.errorQueue.length} errors to monitoring service`);
    }
    
    try {
      // Here you would normally send the errors to a backend
      // this.sendErrorsToBackend(this.errorQueue);
      
      // Simulate network error handling
      if (navigator.onLine) {
        // Success - clear the queue
        this.errorQueue = [];
      } else {
        // If offline, keep errors in queue to try again later
        console.warn("Device offline, keeping errors in queue");
      }
    } catch (e) {
      console.error("Error while flushing errors:", e);
      // Keep errors in queue to try again
    }
  }

  public shutdown(): void {
    if (!this.isInitialized) return;
    
    // Remove event listeners
    window.removeEventListener('error', this.globalErrorHandler);
    window.removeEventListener('unhandledrejection', this.unhandledRejectionHandler);
    
    // Clear flush interval
    if (this.flushIntervalId !== null) {
      window.clearInterval(this.flushIntervalId);
      this.flushIntervalId = null;
    }
    
    // Flush any remaining errors
    this.flushErrors();
    
    this.isInitialized = false;
  }
}

// Export a singleton instance
export const errorMonitoring = ErrorMonitoringService.getInstance();

// Helper function to gracefully capture exceptions
export function tryCatch<T>(fn: () => T, fallback: T, errorMessage = 'Operation failed'): T {
  try {
    return fn();
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    error.message = `${errorMessage}: ${error.message}`;
    errorMonitoring.captureError(error);
    return fallback;
  }
}
