// Utility functions for image optimization

export const getOptimizedImageSrc = (originalSrc: string, format: 'webp' | 'avif' = 'webp'): string => {
  // Convert image extensions to modern formats
  return originalSrc.replace(/\.(png|jpg|jpeg)$/i, `.${format}`);
};

export const createImageSources = (src: string) => {
  return {
    webp: getOptimizedImageSrc(src, 'webp'),
    avif: getOptimizedImageSrc(src, 'avif'),
    original: src
  };
};

export const calculateImageDimensions = (aspectRatio: number, maxWidth: number) => {
  return {
    width: maxWidth,
    height: Math.round(maxWidth / aspectRatio)
  };
};

// Preload critical images for LCP optimization
export const preloadCriticalImages = (imagePaths: string[]) => {
  imagePaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    document.head.appendChild(link);
  });
};

// Lazy load images when they come into viewport
export const createIntersectionObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  return new IntersectionObserver(callback, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
};