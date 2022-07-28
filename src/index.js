import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { SWRConfig } from "swr";
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SWRConfig
    value={{
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }}
  >
    <SkeletonTheme baseColor="#202020" highlightColor="#4B5563">
      <Router>
        <App />
        <ToastContainer></ToastContainer>
      </Router>
    </SkeletonTheme>
  </SWRConfig>
);
