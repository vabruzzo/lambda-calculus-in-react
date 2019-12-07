import React, { FC } from "react";
import IDENTITY from "./components/IDENTITY";
import { ZERO, ONE, TWO, THREE } from "./components/numbers";
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
            <Label name="IDENTITY" /> (<Label name="ONE" />
            ): <IDENTITY args={[ONE]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="IDENTITY" /> (<Label name="IDENTITY" />
            ): <IDENTITY args={[IDENTITY]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="TRUE" /> (<Label name="ZERO" /> <Label name="ONE" />
            ): <TRUE args={[ZERO, ONE]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="FALSE" /> (<Label name="ONE" /> <Label name="TWO" />
            ): <FALSE args={[ONE, TWO]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="IDENTITY" /> (<Label name="TRUE" /> (
            <Label name="TWO" /> <Label name="THREE" />
            )): <IDENTITY args={[<TRUE args={[TWO, THREE]} />]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="TRUE" /> (<Label name="TRUE" /> (<Label name="ONE" />
            )): <TRUE args={[TRUE, ONE]} />
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
            <Label name="IF_THEN_ELSE" /> (<Label name="TRUE" /> (
            <Label name="ONE" /> <Label name="TWO" />
            )): <IF_THEN_ELSE args={[TRUE, ONE, TWO]} />
          </CodeBlock>
          <CodeBlock>
            <Label name="IF_THEN_ELSE" /> (<Label name="FALSE" /> (
            <Label name="ONE" /> <Label name="TWO" />
            )): <IF_THEN_ELSE args={[FALSE, ONE, TWO]} />
          </CodeBlock>
        </ShowLambdas>
      </main>
    </div>
  );
};

export default App;
