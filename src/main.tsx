
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { errorMonitoring } from './services/errorMonitoring.ts'

// Initialize error monitoring service
if (process.env.NODE_ENV === 'production') {
  errorMonitoring.init('production');
}

// Add global error handler for render errors
const renderApp = () => {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Root element not found");
  }
  
  createRoot(root).render(<App />);
};

// Catch any errors during initialization
try {
  renderApp();
} catch (error) {
  console.error('Failed to render application:', error);
  if (error instanceof Error) {
    errorMonitoring.captureError(error);
  }
  
  // Render a minimal error message
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        color: white;
        background: #111;
        padding: 20px;
        border-radius: 5px;
        font-family: sans-serif;
        max-width: 500px;
        margin: 50px auto;
        text-align: center;
      ">
        <h2>Application Error</h2>
        <p>We're sorry, but something went wrong. Our team has been notified.</p>
        <button onclick="window.location.reload()" style="
          background: #555;
          border: none;
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        ">
          Reload Application
        </button>
      </div>
    `;
  }
}
