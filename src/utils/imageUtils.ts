
/**
 * Utility for handling and optimizing images
 */

// Cache for image placeholders to prevent duplicate work
const placeholderCache = new Map<string, string>();

/**
 * Creates a low-quality image placeholder until the full image loads
 * @param src URL of the original image
 * @param width Desired width of the placeholder
 * @param height Desired height of the placeholder
 * @returns Data URL of the low-quality image placeholder
 */
export const createImagePlaceholder = async (
  src: string,
  width = 20,
  height = 20
): Promise<string> => {
  // Check cache first
  const cacheKey = `${src}-${width}-${height}-jpeg`;
  if (placeholderCache.has(cacheKey)) {
    return placeholderCache.get(cacheKey) as string;
  }
  
  return new Promise((resolve, reject) => {
    // Skip processing for data URLs (already processed)
    if (src.startsWith('data:')) {
      resolve(src);
      return;
    }
    
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      // Create small canvas for the placeholder
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }
      
      // Draw the image at a smaller size
      ctx.drawImage(img, 0, 0, width, height);
      
      // Get the data URL and cache it
      const dataUrl = canvas.toDataURL("image/jpeg", 0.1);
      placeholderCache.set(cacheKey, dataUrl);
      
      // Return the data URL
      resolve(dataUrl);
    };
    img.onerror = () => {
      console.warn(`Failed to load image for placeholder: ${src}`);
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    // Add cache busting parameter for network images
    if (src.startsWith('http')) {
      img.src = `${src}${src.includes('?') ? '&' : '?'}cb=${Date.now()}`;
    } else {
      img.src = src;
    }
  });
};

// Format support detection helpers
const supportsWebP = (() => {
  const elem = document.createElement('canvas');
  return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
})();

const supportsAVIF = (() => {
  // We can't reliably detect AVIF support in all browsers,
  // so this is a browser capability check
  const isChrome = navigator.userAgent.indexOf("Chrome") > -1;
  const isSafari = navigator.userAgent.indexOf("Safari") > -1 && 
                  navigator.userAgent.indexOf("Chrome") === -1;
  
  // Chrome 90+ and Safari 16+ support AVIF
  if (isChrome) {
    const chromeVersion = parseInt(navigator.userAgent.match(/Chrome\/([0-9]+)/)![1], 10);
    return chromeVersion >= 90;
  } else if (isSafari) {
    const safariVersion = parseInt(navigator.userAgent.match(/Version\/([0-9]+)/)![1], 10);
    return safariVersion >= 16;
  }
  
  return false;
})();

// Add WebP and AVIF format support to image placeholders
export const createResponsivePlaceholder = async (
  src: string, 
  width = 20, 
  height = 20, 
  format: 'jpeg' | 'webp' | 'avif' = 'jpeg'
): Promise<string> => {
  // Check cache first
  const cacheKey = `${src}-${width}-${height}-${format}`;
  if (placeholderCache.has(cacheKey)) {
    return placeholderCache.get(cacheKey) as string;
  }
  
  // Validate format support
  let finalFormat = format;
  if (format === 'webp' && !supportsWebP) {
    finalFormat = 'jpeg';
  } else if (format === 'avif' && !supportsAVIF) {
    finalFormat = supportsWebP ? 'webp' : 'jpeg';
  }
  
  try {
    // Skip processing for data URLs (already processed)
    if (src.startsWith('data:')) {
      return src;
    }
    
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { alpha: true });
    
    if (!ctx) {
      throw new Error("Could not get canvas context");
    }
    
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => resolve(image);
      image.onerror = reject;
      
      // Add cache busting for network images
      if (src.startsWith('http')) {
        image.src = `${src}${src.includes('?') ? '&' : '?'}cb=${Date.now()}`;
      } else {
        image.src = src;
      }
    });
    
    // Draw the image at a smaller size
    ctx.drawImage(img, 0, 0, width, height);
    
    // Get data URL with appropriate format
    const mimeType = `image/${finalFormat}`;
    const dataUrl = canvas.toDataURL(mimeType, 0.2); // Slightly higher quality for placeholders
    
    // Cache the result
    placeholderCache.set(cacheKey, dataUrl);
    
    return dataUrl;
  } catch (error) {
    console.error("Failed to create responsive placeholder:", error);
    // Fallback to original method if new method fails
    const fallback = await createImagePlaceholder(src, width, height);
    placeholderCache.set(cacheKey, fallback);
    return fallback;
  }
};

/**
 * Determines if an image should be lazy loaded based on its position
 * @param element The target element to check
 * @returns Boolean indicating if the element should be lazy loaded
 */
export const shouldLazyLoad = (element: HTMLElement): boolean => {
  // If IntersectionObserver is not available (old browsers), don't lazy load
  if (!('IntersectionObserver' in window)) return false;
  
  // Check if image is near viewport
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Load immediately if within 500px of viewport
  return rect.top > viewportHeight + 500;
};

/**
 * Checks if an image exists in the browser cache
 * @param src Image URL to check
 * @returns Promise resolving to boolean indicating if image is cached
 */
export const isImageCached = async (src: string): Promise<boolean> => {
  // Use the Cache API if available (only works in secure contexts)
  if ('caches' in window) {
    try {
      const cache = await caches.open('image-cache');
      const cachedResponse = await cache.match(src);
      if (cachedResponse) return true;
    } catch (e) {
      // Ignore cache API errors
    }
  }
  
  // Fallback method - check if image loads quickly
  return new Promise((resolve) => {
    const img = new Image();
    
    // If image loads very quickly, it's likely cached
    const timer = setTimeout(() => resolve(false), 20);
    
    img.onload = () => {
      clearTimeout(timer);
      resolve(true);
    };
    
    img.onerror = () => {
      clearTimeout(timer);
      resolve(false);
    };
    
    img.src = src;
  });
};

// Extend existing getCriticalAssets to support format checking
export const getCriticalAssets = (): string[] => {
  const baseAssets = [
    '/lovable-uploads/1db85eaa-05a2-472a-b647-749b000a7f41.png', // Logo
    '/lovable-uploads/29dbc926-49ae-496e-978b-0e8a5705b464.png', // Alan's image
  ];

  // Extend with testimonial images to preload them
  const testimonialImages = [
    '/lovable-uploads/698b6461-b40d-447a-b58e-49ae155ad21a.png',
    '/lovable-uploads/0eb52a72-5ee0-4e5a-8251-e61bd4989dc7.png',
    '/lovable-uploads/004a4543-00f5-4a36-be0a-5ddb22014d59.png'
  ];
  
  baseAssets.push(...testimonialImages);

  // Check if WebP is supported
  if (supportsWebP) {
    // Potentially add WebP versions if available
    baseAssets.push(...baseAssets.map(asset => asset.replace('.png', '.webp')));
  }

  return baseAssets;
};

/**
 * Preload critical images
 * Can be called early in the application lifecycle
 */
export const preloadCriticalImages = (): void => {
  const assets = getCriticalAssets();
  
  assets.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};
