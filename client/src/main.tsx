import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./api/apollo.ts";
import StoreProvider from "./store/StoreProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ApolloProvider>
  </StrictMode>
);
