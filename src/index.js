import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client"; // Mengimpor createRoot dari react-dom/client

import App from "./App";

createRoot(document.getElementById("root")).render( // Menggunakan createRoot dengan render
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
