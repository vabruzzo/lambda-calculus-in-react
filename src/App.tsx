import React, { FC } from "react";
import IDENTITY from "./components/IDENTITY";
import TRUE from "./components/logic/TRUE";
import FALSE from "./components/logic/FALSE";
import AND from "./components/logic/AND";
import OR from "./components/logic/OR";
import IF_THEN_ELSE from "./components/logic/IF_THEN_ELSE";
import ShowLambdasButton from "./components/ShowLambdasButton";
import ShowLambdas from "./components/ShowLambdas";
import CodeBlock from "./components/CodeBlock";
import Label from "./components/Label";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Lambda Calculus in React</header>
      <main>
        <ShowLambdas>
          <ShowLambdasButton />
          <CodeBlock>
            <Label name="IDENTITY" /> (1): <IDENTITY args={[1]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="IDENTITY" /> (<Label name="IDENTITY" />
            ): <IDENTITY args={[IDENTITY]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="TRUE" /> (a b): <TRUE args={["a", "b"]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="FALSE" /> (a b): <FALSE args={["a", "b"]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="IDENTITY" /> (<Label name="TRUE" /> (a b)):{" "}
            <IDENTITY args={[<TRUE args={["a", "b"]} />]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="TRUE" /> (<Label name="TRUE" /> (b)):{" "}
            <TRUE args={[TRUE, "b"]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="AND" /> (<Label name="TRUE" /> <Label name="FALSE" />
            ): <AND args={[TRUE, FALSE]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="AND" /> (<Label name="TRUE" /> <Label name="TRUE" />
            ): <AND args={[TRUE, TRUE]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="AND" /> (<Label name="FALSE" /> <Label name="FALSE" />
            ): <AND args={[FALSE, FALSE]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="AND" /> (<Label name="FALSE" /> <Label name="TRUE" />
            ): <AND args={[FALSE, TRUE]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="OR" /> (<Label name="TRUE" /> <Label name="FALSE" />
            ): <OR args={[TRUE, FALSE]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="OR" /> (<Label name="TRUE" /> <Label name="TRUE" />
            ): <OR args={[TRUE, TRUE]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="OR" /> (<Label name="FALSE" /> <Label name="FALSE" />
            ): <OR args={[FALSE, FALSE]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="OR" /> (<Label name="FALSE" /> <Label name="TRUE" />
            ): <OR args={[FALSE, TRUE]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="IF_THEN_ELSE" /> (<Label name="TRUE" /> (c d)):{" "}
            <IF_THEN_ELSE args={[TRUE, "c", "d"]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="IF_THEN_ELSE" /> (<Label name="FALSE" /> (c d)):{" "}
            <IF_THEN_ELSE args={[FALSE, "c", "d"]} />
          </CodeBlock>
        </ShowLambdas>
      </main>
    </div>
  );
};

export default App;
