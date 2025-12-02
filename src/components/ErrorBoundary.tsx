
import React, { Component, ErrorInfo } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { RefreshCw } from "lucide-react";
import { errorMonitoring } from "@/services/errorMonitoring";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetKey?: any; // Used to reset the error boundary when props change
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    
    // Store the error info in state
    this.setState({ errorInfo });
    
    // Capture error with monitoring service
    errorMonitoring.captureError(error, errorInfo);
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // Show toast notification
    toast({
      variant: "destructive",
      title: "An error occurred",
      description: "Our team has been notified of the issue.",
    });
  }
  
  // Reset the error boundary if resetKey changes
  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (
      this.state.hasError && 
      prevProps.resetKey !== this.props.resetKey
    ) {
      this.reset();
    }
  }

  // Method to programmatically reset the error boundary
  reset = (): void => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleReset = (): void => {
    this.reset();
    
    // Only reload if this is a critical error that can't be solved by resetting state
    const shouldReload = this.state.error?.name === "ChunkLoadError" || 
                         this.state.error?.message.includes("loading chunk") ||
                         this.state.error?.message.includes("network");
    
    if (shouldReload) {
      window.location.reload();
    }
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex items-center justify-center min-h-[200px] p-4">
          <Alert variant="destructive" className="max-w-md">
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>
              <div className="mt-2 mb-4 text-sm opacity-90">
                {this.state.error?.message || "An unexpected error occurred"}
              </div>
              <Button 
                size="sm" 
                onClick={this.handleReset}
                className="mt-2"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Recover
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
