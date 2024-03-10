import App from "./App.tsx";
import { Hero, Footer } from "./components";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Hero />
    <App />
    <Footer />
  </React.StrictMode>,
);
