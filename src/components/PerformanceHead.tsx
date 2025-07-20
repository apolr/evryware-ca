import { useEffect } from "react";

const PerformanceHead = () => {
  useEffect(() => {
    // Add manifest link
    const manifestLink = document.createElement('link');
    manifestLink.rel = 'manifest';
    manifestLink.href = '/manifest.json';
    document.head.appendChild(manifestLink);

    // Register service worker for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }

    // Add resource hints for critical resources
    const preloadLinks = [
      // Preload critical background images for LCP optimization
      { href: '/lovable-uploads/3d982da9-686c-4030-8aac-3fb7a2770238.png', as: 'image' },
      // Preload fonts
      { href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap', as: 'style' },
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      linkElement.rel = 'preload';
      linkElement.href = link.href;
      linkElement.as = link.as;
      if (link.as === 'style') {
        linkElement.onload = () => {
          linkElement.rel = 'stylesheet';
        };
      }
      document.head.appendChild(linkElement);
    });

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(domain => {
      const linkElement = document.createElement('link');
      linkElement.rel = 'preconnect';
      linkElement.href = domain;
      linkElement.crossOrigin = 'anonymous';
      document.head.appendChild(linkElement);
    });

  }, []);

  return null;
};

export default PerformanceHead;