
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonical?: string;
}

/**
 * SEO Component
 * 
 * Handles all meta tags needed for search engine optimization.
 * Used across all pages to ensure consistent SEO implementation.
 * 
 * @component
 * @param {SEOProps} props - SEO properties
 */
const SEO = ({ 
  title = "Emotional Fitness Training | Peak Performance | Alan Muellegger",
  description = "Optimize your emotions for peak performance. Boutique coaching for high performers seeking breakthrough results in business and life.",
  keywords = "emotional fitness, peak performance, high performer coaching, emotional optimization, Alan Muellegger",
  image = "/lovable-uploads/29dbc926-49ae-496e-978b-0e8a5705b464.png",
  url = "https://emotionalfitness.com",
  canonical = "https://emotionalfitness.com",
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
