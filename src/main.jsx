import AppRoutes from "@routes/AppRoutes";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "@styles/index.css";
import { LocalizationProvider } from "./context/LocalizationWrapper";
import toast, { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider>
        <BrowserRouter>
          <Toaster
            toastOptions={{
              className: "",
              style: {
                fontSize:"14px",
                fontWeight:"600"
              },
            }}
            position="bottom-center"
          />
          <AppRoutes />
        </BrowserRouter>
      </LocalizationProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
