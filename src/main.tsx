import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { DataContextProvider } from "./context/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataContextProvider>
        <BrowserRouter>
          <Router />
          <ToastContainer />
        </BrowserRouter>
      </DataContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
