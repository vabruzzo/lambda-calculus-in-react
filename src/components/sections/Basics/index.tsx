import React, { FC } from "react";
import CodeBlock from "../../CodeBlock";
import Section from "../../Section";
import Label from "../../Label";
import Link from "../../Link";
import IDENTITY from "../../IDENTITY";

const Basics: FC = () => (
  <Section heading={"Basics"}>
    <p>
      Lambda calculus can simulate any{" "}
      <Link to="https://en.wikipedia.org/wiki/Turing_machine">
        Turing machine
      </Link>
      . It does so with only three components:
    </p>
    <ul>
      <li>
        variables: <code>x</code>
      </li>
      <li>
        function abstraction: <code>λx.x</code>
      </li>
      <li>
        function application: <code>λx.x 1</code>
      </li>
    </ul>
    <p>
      The lambda symbol above signifies that the variable <code>x</code> is
      bound to the <code>x</code> in the body of the function abstraction. This
      example is the identity function, it returns whatever argument is passed
      in. The function application evaluates to <code>1</code>. This process of
      replacing variables with their arguments and evaluating the expression is
      called β-reduction.
    </p>
    <p>
      Implementing lambda calculus in React begins with building a β-reduction
      component. Here is the identity function being applied with the argument{" "}
      <code>1</code> in React:
      <CodeBlock>{`<βReduction λ={x => x} args={[1]} />`}</CodeBlock>
      And here is what this component looks like under the hood:
      <CodeBlock>
        {`const βReduction: FC<βReductionProps> = ({ λ, args }) => {
  const application = args.reduce(
    (accumulator, current) => accumulator(current),
    λ
  );

  return application;
};`}
      </CodeBlock>
      <code>βReduction</code> calls <code>reduce</code> which in turn calls the
      lambda prop on the first argument passed in. For each subsequent argument,
      it calls the result of the previous iteration on that argument. Hence, the
      result of calling a lambda on an argument is another lambda function
      (except for possibly the last iteration, but only because this allows it
      to render strings and numbers for demo purposes).
    </p>
    <p>
      On the left side of the → below is the lambda expression for the identity
      function with <code>1</code> passed in as an argument. Lambda expressions
      are always anonymous but I've included labels for readability. Click on
      any label and you'll reveal the lambda expression. On the right side of
      the → is the <code>βReduction</code> component being rendered by React
      with <code>x => x</code> passed as the <code>λ</code> prop and{" "}
      <code>[1]</code> passed as the <code>args</code> prop.
      <CodeBlock>
        <Label name="IDENTITY" /> 1 → <IDENTITY args={[1]} />
      </CodeBlock>
    </p>
    <p>
      There are React components for common lambda expressions. Here's the{" "}
      <code>
        <Label name="IDENTITY" />
      </code>{" "}
      component:
      <CodeBlock>
        {`const IDENTITY: FC<LambdaExprProps> = ({ args }) => (
  <βReduction λ={x => x} args={args} />
);`}
      </CodeBlock>
      And here is the{" "}
      <code>
        <Label name="IDENTITY" />
      </code>{" "}
      component being rendered with itself as an argument. Unsurprisingly, it
      returns itself. Note: since{" "}
      <code>
        <Label name="IDENTITY" />
      </code>{" "}
      is a function and we can't render functions, the <code>βReduction</code>{" "}
      component actually renders its <code>displayName</code> property:
      <CodeBlock>
        <Label name="IDENTITY" /> <Label name="IDENTITY" /> →{" "}
        <IDENTITY args={[IDENTITY]} />
      </CodeBlock>
      The JSX React is rendering on the right side of the arrow:
      <CodeBlock>{`<IDENTITY args={[IDENTITY]} />`}</CodeBlock>
    </p>
    <p>
      We can nest these lambdas as much as we'd like. For example:
      <CodeBlock>
        <Label name="IDENTITY" /> (<Label name="IDENTITY" />{" "}
        <Label name="IDENTITY" />
        ) → <IDENTITY args={[<IDENTITY args={[IDENTITY]} />]} />
      </CodeBlock>
      And the JSX for this β-reduction:
      <CodeBlock>
        {`<IDENTITY args={[<IDENTITY args={[IDENTITY]} />]} />`}
      </CodeBlock>
    </p>
    <p>
      That's it for the very basics of lambda calculus: variables, functions,
      and function application. There's not much to it. Nor is there much to
      implementing something like it with React components. We've already used
      something other than these three things though: numbers. We cheated. Next
      we'll learn how to represent numbers in lambda calculus.
    </p>
  </Section>
);

export default Basics;
