
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from "@/components/ErrorBoundary";
import { useErrorMonitoring } from "@/hooks/use-error-monitoring";
import { Suspense, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Page imports
import Index from "./pages/Index";
import Rise from "./pages/Rise";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import LegalDisclaimers from "./pages/LegalDisclaimers";

// Fallback loader component
const PageLoader = () => (
  <div className="w-full min-h-screen bg-black flex items-center justify-center">
    <div className="w-full max-w-md space-y-4 p-4">
      <Skeleton className="h-8 w-3/4 mx-auto" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-8 w-1/2 mx-auto" />
    </div>
  </div>
);

// App container with monitoring
const AppContainer = () => {
  // Initialize error monitoring
  useErrorMonitoring();

  useEffect(() => {
    // Log page views for monitoring
    const handleRouteChange = () => {
      console.log(`📊 Page view: ${window.location.pathname}`);
    };

    // Log initial page view
    handleRouteChange();

    // Add listener for navigation events
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<PageLoader />}>
                <Index />
              </Suspense>
            } />
            <Route path="/about" element={
              <Suspense fallback={<PageLoader />}>
                <AboutPage />
              </Suspense>
            } />
            <Route path="/rise" element={
              <Suspense fallback={<PageLoader />}>
                <Rise />
              </Suspense>
            } />
            <Route path="/privacy-policy" element={
              <Suspense fallback={<PageLoader />}>
                <PrivacyPolicy />
              </Suspense>
            } />
            <Route path="/terms-of-service" element={
              <Suspense fallback={<PageLoader />}>
                <TermsOfService />
              </Suspense>
            } />
            <Route path="/legal-disclaimers" element={
              <Suspense fallback={<PageLoader />}>
                <LegalDisclaimers />
              </Suspense>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
};

// Main App component with providers
const App = () => (
  <ErrorBoundary>
    <AppContainer />
  </ErrorBoundary>
);

export default App;
