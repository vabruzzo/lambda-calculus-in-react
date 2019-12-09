import React, { FC } from "react";
import Link from "./components/Link";
import Introduction from "./components/sections/Introduction";
import Basics from "./components/sections/Basics";
import Numbers from "./components/sections/Numbers";
import Logic from "./components/sections/Logic";
import Pairs from "./components/sections/Pairs";
import Recursion from "./components/sections/Recursion";
import "./App.css";

const App: FC = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="h1">Lambda Calculus in React</h1>
      <p className="githubLink">
        <Link to="https://github.com/thoughtbyte/lambda-calculus-in-react">
          repo
        </Link>
      </p>
    </header>
    <main>
      <Introduction />
      <Basics />
      <Numbers />
      <Logic />
      <Pairs />
      <Recursion />
    </main>
  </div>
);

export default App;
