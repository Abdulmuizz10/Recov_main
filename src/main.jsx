import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";
import { PostContextProvider } from "./context/PostContext/PostContext";
import { ClaimContextProvider } from "./context/ClaimContext/ClaimContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <ClaimContextProvider>
          <App />
        </ClaimContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
