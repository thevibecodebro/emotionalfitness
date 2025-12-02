
import { useEffect, useCallback } from 'react';
import { errorMonitoring } from '@/services/errorMonitoring';

interface ErrorMonitoringHookOptions {
  appName?: string;
  version?: string;
  disabled?: boolean;
}

export function useErrorMonitoring(options: ErrorMonitoringHookOptions = {}) {
  const { appName = 'EmotionalFitness', version = '1.0', disabled = false } = options;

  useEffect(() => {
    if (disabled) return;
    
    // Initialize the error monitoring service
    errorMonitoring.init(process.env.NODE_ENV);

    // Capture initial app information
    errorMonitoring.captureMessage(`App initialized: ${appName} v${version}`, 'info');

    // Clean up when the component is unmounted
    return () => {
      errorMonitoring.shutdown();
    };
  }, [appName, version, disabled]);

  const captureError = useCallback((error: Error, context?: Record<string, unknown>) => {
    errorMonitoring.captureError(error, undefined, context);
  }, []);

  const captureMessage = useCallback((message: string, level: 'info' | 'warning' | 'error' = 'info') => {
    errorMonitoring.captureMessage(message, level);
  }, []);

  return {
    captureError,
    captureMessage
  };
}
