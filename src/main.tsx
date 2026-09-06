import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { KeycloakProvider } from "./features/auth/KeycloakProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <KeycloakProvider>
          <App />
        </KeycloakProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);