import React, { FC } from "react";
import CodeBlock from "../../CodeBlock";
import Section from "../../Section";
import Label from "../../Label";
import Link from "../../Link";
import { ONE, TWO } from "../../numbers";
import SUCCESSOR from "../../numbers/SUCCESSOR";
import IDENTITY from "../../IDENTITY";

const Numbers: FC = () => (
  <Section heading={"Numbers"}>
    <p>
      One common approach to encoding numbers, and other data and operators, is{" "}
      <Link to="https://en.wikipedia.org/wiki/Church_encoding">
        Church encoding
      </Link>
      . A Church encoding for a number is a function that takes two arguments,{" "}
      <code>f</code> and <code>x</code>, and applies <code>f</code> to{" "}
      <code>x</code> any number of times. To represent <code>1</code> it applies
      once, <code>2</code> twice, and so on. <code>0</code> is represented by
      the lambda that doesn't apply <code>f</code> to <code>x</code>. Here are
      the lambda expressions:
    </p>
    <ul>
      <li>
        <code>0</code>: <code>λf.λx.x</code>
      </li>
      <li>
        <code>1</code>: <code>λf.λx.f x</code>
      </li>
      <li>
        <code>2</code>: <code>λf.λx.f (f x)</code>
      </li>
      <li>
        <code>3</code>: <code>λf.λx.f (f (f x))</code>
      </li>
    </ul>
    <p>
      The{" "}
      <code>
        <Label name="IDENTITY" />
      </code>{" "}
      lambda only takes in one argument. To represent numbers, we take in two.
      However, lambda expressions can only take in one argument. Lambdas that
      require two arguments are{" "}
      <Link to="https://en.wikipedia.org/wiki/Currying">curried</Link>. That is,
      they take in one argument, then return a function that takes in the second
      argument, and so on. This is how we represent these lambdas in JavaScript:
    </p>
    <ul>
      <li>
        <code>0</code>: <code>f => x => x</code>
      </li>
      <li>
        <code>1</code>: <code>f => x => f(x)</code>
      </li>
      <li>
        <code>2</code>: <code>f => x => f(f(x))</code>
      </li>
      <li>
        <code>3</code>: <code>f => x => f(f(f(x)))</code>
      </li>
    </ul>
    <p>
      To represent these numbers as React components, we pass the JavaScript
      representations of the lambdas to the <code>λ</code> prop of the{" "}
      <code>βReduction</code> component:
      <CodeBlock>
        {`const ZERO: FC<LambdaExprProps> = ({ args }) => (
  <βReduction λ={f => x => x} args={args} />
);

const ONE: FC<LambdaExprProps> = ({ args }) => (
  <βReduction λ={f => x => f(x)} args={args} />
);

const TWO: FC<LambdaExprProps> = ({ args }) => (
  <βReduction λ={f => x => f(f(x))} args={args} />
);`}
      </CodeBlock>
    </p>
    <p>
      We can now avoid cheating and pass the{" "}
      <code>
        <Label name="ONE" />
      </code>{" "}
      lambda to{" "}
      <code>
        <Label name="IDENTITY" />
      </code>
      :
      <CodeBlock>
        <Label name="IDENTITY" /> <Label name="ONE" /> →{" "}
        <IDENTITY args={[ONE]} />
      </CodeBlock>
    </p>
    <p>
      And the JSX being rendered on the right side:
      <CodeBlock>{`<IDENTITY args={[ONE]} />`}</CodeBlock>
    </p>
    <p>
      So we have numbers, or at least a few of them, and we have an{" "}
      <code>
        <Label name="IDENTITY" />
      </code>{" "}
      function. Let's do something more interesting. Let's make a function that
      will give us the successor to any number we pass into it. The lambda
      expression for this: <CodeBlock>{`λn.λf.λx.f (n f x)`}</CodeBlock> This
      lambda takes three arguments: a number, a function, and something to apply
      the function to. Suppose you pass in{" "}
      <code>
        <Label name="TWO" />
      </code>{" "}
      as the first argument. That would reduce to:{" "}
      <CodeBlock>{`λf.λx.f (TWO f x)`}</CodeBlock> Then, for whatever{" "}
      <code>f</code> and <code>x</code> we pass in, we apply <code>f</code> to
      whatever{" "}
      <code>
        <Label name="TWO" />
      </code>{" "}
      returns when we pass <code>f</code> and <code>x</code> to it.{" "}
      <code>
        <Label name="TWO" />
      </code>{" "}
      returns the application of <code>f</code> to <code>x</code> twice. So...
      we apply <code>f</code> to the application of <code>f</code> to{" "}
      <code>x</code> twice. That is, the successor lambda when given the
      argument{" "}
      <code>
        <Label name="TWO" />
      </code>{" "}
      returns a function that takes an <code>f</code> and an <code>x</code> and
      returns three applications of <code>f</code> to <code>x</code>. That is,
      it returns the Church encoding for <code>3</code>.
    </p>
    <p>
      As a React component:
      <CodeBlock>
        {`const SUCCESSOR: FC<LambdaExprProps> = ({ args }) => (
  <βReduction
    λ={n => f => x => f({ args: [n({ args: [f, x] })] })}}
    args={args}
  />
);`}
      </CodeBlock>
      One important thing to note here is that we can't just pass arguments
      directly to our functions in many cases, since <code>βReduction</code>{" "}
      expects an <code>args</code> prop that it reduces over. Further, our
      functions are curried, so passing multiple arguments normally wouldn't
      work. Rendering our component:
      <CodeBlock>
        <Label name="SUCCESSOR" /> <Label name="TWO" /> →{" "}
        <SUCCESSOR args={[TWO]} />
      </CodeBlock>
      Even though we have a{" "}
      <code>
        <Label name="THREE" />
      </code>{" "}
      component, lambda expressions and our components may return new anonymous
      functions, so we can't display the name here. However, if we{" "}
      <code>.toString()</code> the actual function being returned, we get:
      <CodeBlock>{`f => x => f({ args: [n({ args: [f, x] })] })`}</CodeBlock>{" "}
      Since we know that <code>n</code> refers to{" "}
      <code>
        <Label name="TWO" />
      </code>{" "}
      we know that the anonymous function here is equivalent to{" "}
      <code>
        <Label name="THREE" />
      </code>
      .
    </p>
    {/* <p>
      Recall that our React number components take in two arguments, a function
      and something to call that function on. It doesn't really matter what
      these are. We're going to cheat a bit and pass in a function that will
      count the number of times it's been called and return that number as a
      string. If we pass that and any other value as <code>x</code> to our
      numbers, we will render the number of times the function has been called:
      <CodeBlock>
        <Label name="ONE" /> numberCounter() 'any value' →{" "}
        <ONE args={[numberCounter(), "any value"]} />
      </CodeBlock>
      <CodeBlock>
        <Label name="TWO" /> numberCounter() 'any value' →{" "}
        <TWO args={[numberCounter(), "any value"]} />
      </CodeBlock>
      Here's the JSX being rendered in the last example, this outputs what you
      see on the right side:
      <CodeBlock>{`<TWO args={[numberCounter(), "any value"]} />`}</CodeBlock>A
      more complex example:
      <CodeBlock>
        <Label name="SUCCESSOR" /> (<Label name="SUCCESSOR" />{" "}
        <Label name="THREE" />) → <SUCCESSOR args={[THREE]} />
      </CodeBlock>
      Unfortunately, <code>numberCounter</code> doesn't yet work with{" "}
      <code>
        <Label name="SUCCESSOR" />
      </code>
      .
    </p> */}
    <p>
      Addition, subtraction, and multiplication components will be added here in
      the future.
    </p>
  </Section>
);

export default Numbers;
