import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import RiseHero from "@/components/sections/RiseHero";
import { META } from "@/utils/constants";
import { Skeleton } from "@/components/ui/skeleton";
import ErrorBoundary from "@/components/ErrorBoundary";
import { withErrorBoundary } from "@/components/withErrorBoundary";

// Lazy load non-critical sections with Rise theme
const RiseServices = lazy(() => import("@/components/RiseServices"));
const RiseAbout = lazy(() => import("@/components/RiseAbout"));
const RiseTestimonials = lazy(() => import("@/components/RiseTestimonials"));
const RiseFAQ = lazy(() => import("@/components/RiseFAQ"));
const RisePricing = lazy(() => import("@/components/RisePricing"));
const RiseContact = lazy(() => import("@/components/RiseContact"));
const Footer = lazy(() => import("@/components/Footer"));

// Skeleton loaders for lazy-loaded components
const SectionSkeleton = () => (
  <div className="w-full py-16" aria-hidden="true">
    <Skeleton className="w-48 h-10 mx-auto mb-8" />
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4">
      <Skeleton className="w-full h-64" />
      <Skeleton className="w-full h-64" />
    </div>
  </div>
);

// Section error fallback
const SectionErrorFallback = ({ name }: { name: string }) => (
  <div className="w-full py-12 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h3 className="text-xl font-semibold mb-4">Unable to load {name} section</h3>
      <p className="mb-4">We're having trouble loading this part of the page.</p>
      <button 
        onClick={() => window.location.reload()}
        className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
      >
        Try refreshing
      </button>
    </div>
  </div>
);

// Enhance each section with error boundary
const SafeRiseHero = withErrorBoundary(RiseHero, { 
  fallback: <SectionErrorFallback name="Hero" />,
  componentName: "RiseHero"
});

const SafeHeader = withErrorBoundary(Header, {
  componentName: "Header"
});

const SafeFooter = withErrorBoundary(Footer, {
  fallback: <SectionErrorFallback name="Footer" />,
  componentName: "Footer"
});

/**
 * Rise Page Component
 * 
 * Rise-themed landing page with red/orange gradient color scheme.
 * Duplicates the main page structure with Rise-specific components.
 * 
 * @component
 */
const Rise = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Rise Training | Emotional Fitness | Alan Muellegger"
        description="Rise Training - Optimize your emotions for peak performance. Boutique coaching for high performers, entrepreneurs, and executives seeking breakthrough results."
        keywords="rise training, emotional fitness, peak performance, entrepreneur coaching, executive coaching, high performer coaching, emotional optimization, Alan Muellegger"
        canonical="https://emotionalfitness.com/rise"
      />
      <ErrorBoundary fallback={
        <div className="p-4 text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Navigation Unavailable</h1>
          <p>Please try refreshing the page</p>
        </div>
      }>
        <SafeHeader />
      </ErrorBoundary>
      
      <main id="main-content" tabIndex={-1}>
        <ErrorBoundary fallback={<SectionErrorFallback name="Hero" />}>
          <SafeRiseHero />
        </ErrorBoundary>
        
        {/* Lazy loaded sections with suspense fallbacks */}
        <ErrorBoundary fallback={<SectionErrorFallback name="Services" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <RiseServices />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionErrorFallback name="About" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <RiseAbout />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionErrorFallback name="Testimonials" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <RiseTestimonials />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionErrorFallback name="Pricing" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <RisePricing />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionErrorFallback name="FAQ" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <RiseFAQ />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionErrorFallback name="Contact" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <RiseContact />
          </Suspense>
        </ErrorBoundary>
      </main>
      
      <ErrorBoundary fallback={<SectionErrorFallback name="Footer" />}>
        <Suspense fallback={<SectionSkeleton />}>
          <SafeFooter />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default withErrorBoundary(Rise, {
  componentName: "RisePage"
});

