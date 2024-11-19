import logo from "./logo.svg";
import "./App.css";

import React from "react";
import OGPGenerator from "./components/OGPGenerator";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">OGP画像ジェネレーター</h1>
      <OGPGenerator />
    </div>
  );
}

export default App;
