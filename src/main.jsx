import AppRoutes from "./routes/AppRoutes";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@styles/index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "14px",
            fontWeight: "600",
          },
        }}
        position="bottom-center"
      />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
