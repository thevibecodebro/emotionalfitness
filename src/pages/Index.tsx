
import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import { META } from "@/utils/constants";
import { Skeleton } from "@/components/ui/skeleton";
import ErrorBoundary from "@/components/ErrorBoundary";
import { withErrorBoundary } from "@/components/withErrorBoundary";

// Lazy load non-critical sections
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Contact = lazy(() => import("@/components/sections/Contact"));
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
const SafeHero = withErrorBoundary(Hero, { 
  fallback: <SectionErrorFallback name="Hero" />,
  componentName: "Hero"
});

const SafeHeader = withErrorBoundary(Header, {
  componentName: "Header"
});

const SafeFooter = withErrorBoundary(Footer, {
  fallback: <SectionErrorFallback name="Footer" />,
  componentName: "Footer"
});

/**
 * Index Page Component
 * 
 * Main landing page of the application.
 * Contains all section components in sequence.
 * Each section is optimized for both user experience and search engines.
 * 
 * @component
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title={META.title}
        description={META.description}
        keywords={META.keywords}
        canonical="https://emotionalfitness.com/"
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
          <SafeHero />
        </ErrorBoundary>
        
        {/* Lazy loaded sections with suspense fallbacks */}
        <ErrorBoundary fallback={<SectionErrorFallback name="Services" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <Services />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionErrorFallback name="About" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <About />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionErrorFallback name="Testimonials" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionErrorFallback name="Pricing" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <Pricing />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionErrorFallback name="FAQ" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <FAQ />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<SectionErrorFallback name="Contact" />}>
          <Suspense fallback={<SectionSkeleton />}>
            <Contact />
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

export default withErrorBoundary(Index, {
  componentName: "IndexPage"
});
