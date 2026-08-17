import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient() // Create a new instance of QueryClient for managing server state

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {" "}
    // Helps catch problematic React patterns during development.
    <BrowserRouter>
      {" "}
      // for client-side routing
      <QueryClientProvider client={queryClient}>
        {" "}
        // Provides the QueryClient instance to the application, enabling TanStack ReactQuery for API/server-state management.
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
