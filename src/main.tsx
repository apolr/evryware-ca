import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { trackWebVitals } from './utils/webVitals'

// Track Core Web Vitals for performance monitoring
trackWebVitals();

createRoot(document.getElementById("root")!).render(<App />);
