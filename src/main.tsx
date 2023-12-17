import "./index.css";
import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import theme from "./config/theme.tsx";
import { ThemeProvider } from "@mui/material";

const client = new ApolloClient({
  uri: "http://localhost:4001/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
