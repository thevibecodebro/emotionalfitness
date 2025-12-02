
import React, { useState, useEffect } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

interface WithErrorBoundaryOptions {
  fallback?: React.ReactNode;
  componentName?: string;
}

export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  options: WithErrorBoundaryOptions = {}
): React.FC<P> {
  const { fallback, componentName = Component.displayName || Component.name } = options;
  
  const WrappedComponent: React.FC<P> = (props) => {
    // Use a key that changes when the component gets new props
    const [resetKey, setResetKey] = useState(0);
    
    // Reset error boundary if components props change significantly
    useEffect(() => {
      setResetKey(prev => prev + 1);
    }, [JSON.stringify(props)]);
    
    return (
      <ErrorBoundary
        fallback={fallback}
        resetKey={resetKey}
        onError={(error, errorInfo) => {
          console.error(`Error in ${componentName}:`, error);
          // You could add additional context here
          error.message = `[${componentName}] ${error.message}`;
        }}
      >
        <Component {...props} />
      </ErrorBoundary>
    );
  };
  
  WrappedComponent.displayName = `withErrorBoundary(${componentName})`;
  
  return WrappedComponent;
}
