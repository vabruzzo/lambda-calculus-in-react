import React, { FC } from "react";
import IDENTITY from "./components/IDENTITY";
import TRUE from "./components/TRUE";
import FALSE from "./components/FALSE";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Lambda Calculus in React</header>
      <IDENTITY>{[2]}</IDENTITY>
      <IDENTITY>{[3]}</IDENTITY>
      <IDENTITY>{[<IDENTITY key={1} />]}</IDENTITY>
      <IDENTITY>{[<TRUE>{["a", "b"]}</TRUE>]}</IDENTITY>
      <TRUE>{["a", "b"]}</TRUE>
      <FALSE>{["a", "b"]}</FALSE>
      <TRUE>{[<TRUE key={2} />, "b"]}</TRUE>
    </div>
  );
};

export default App;
