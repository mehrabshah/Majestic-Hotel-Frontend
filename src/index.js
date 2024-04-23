import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../src/Admin/components/ErrorFallback.jsx";
import { BookingProvider } from "./User/contexts/BookingContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <BookingProvider>
        <App />
      </BookingProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
