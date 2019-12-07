import React, { FC } from "react";
import IDENTITY from "./components/IDENTITY";
import TRUE from "./components/TRUE";
import FALSE from "./components/FALSE";
import IF_THEN_ELSE from "./components/IF_THEN_ELSE";
import CodeBlock from "./components/CodeBlock";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Lambda Calculus in React</header>
      <CodeBlock>
        IDENTITY 1: <IDENTITY>{[1]}</IDENTITY>
      </CodeBlock>
      <CodeBlock>
        IDENTITY IDENTITY: <IDENTITY>{[IDENTITY]}</IDENTITY>
      </CodeBlock>
      <CodeBlock>
        TRUE a b: <TRUE>{["a", "b"]}</TRUE>
      </CodeBlock>
      <CodeBlock>
        FALSE a b: <FALSE>{["a", "b"]}</FALSE>
      </CodeBlock>
      <CodeBlock>
        IDENTITY TRUE a b: <IDENTITY>{[<TRUE>{["a", "b"]}</TRUE>]}</IDENTITY>
      </CodeBlock>
      <CodeBlock>
        TRUE TRUE b: <TRUE>{[TRUE, "b"]}</TRUE>
      </CodeBlock>
      <CodeBlock>
        IF_THEN_ELSE TRUE x y: <IF_THEN_ELSE>{[TRUE, "x", "y"]}</IF_THEN_ELSE>
      </CodeBlock>
    </div>
  );
};

export default App;
