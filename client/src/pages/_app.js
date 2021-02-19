import "../styles/globals.css";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-wrapper">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
