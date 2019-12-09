import React, { FC } from "react";
import CodeBlock from "../../CodeBlock";
import Section from "../../Section";
import Label from "../../Label";
import IDENTITY from "../../IDENTITY";
import { ZERO, ONE, TWO, THREE } from "../../numbers";
import TRUE from "../../logic/TRUE";
import FALSE from "../../logic/FALSE";
import AND from "../../logic/AND";
import OR from "../../logic/OR";
import IF_THEN_ELSE from "../../logic/IF_THEN_ELSE";

const Logic: FC = () => (
  <Section heading={"Logic"}>
    <p>The Church encodings for true and false are:</p>
    <ul>
      <li>
        true: <code>λx.λy.x</code>
      </li>
      <li>
        false: <code>λx.λy.y</code>
      </li>
    </ul>
    <p>
      Both of these take in two arguments (remember, they're curried). True
      returns the first, false returns the second. As React components:
      <CodeBlock>
        {`const TRUE: FC<LambdaExprProps> = ({ args }) => (
  <βReduction λ={x => y => x} args={args} />
);

const FALSE: FC<LambdaExprProps> = ({ args }) => (
  <βReduction λ={x => y => y} args={args} />
);`}
      </CodeBlock>
      And here they are in action. Again, the right side of the arrow is the
      output of the JSX being rendered:
      <CodeBlock>
        <Label name="TRUE" /> <Label name="ZERO" /> <Label name="ONE" /> →{" "}
        <TRUE args={[ZERO, ONE]} />
      </CodeBlock>
      <CodeBlock>
        <Label name="FALSE" /> <Label name="ONE" /> <Label name="TWO" /> →{" "}
        <FALSE args={[ONE, TWO]} />
      </CodeBlock>
    </p>
    <p>
      Here's a more complex example composing everything we have so far:
      <CodeBlock>
        <Label name="IDENTITY" /> (<Label name="TRUE" /> (<Label name="FALSE" />{" "}
        <Label name="ONE" /> <Label name="TWO" />) <Label name="THREE" />) →{" "}
        <IDENTITY
          args={[<TRUE args={[<FALSE args={[ONE, TWO]} />, THREE]} />]}
        />
      </CodeBlock>
      Click on all the labels for that one to see how it looks as lambda
      expressions. The labels reuse variables, so it is a bit confusing. This
      doesn't cause an issue for us since all of our variables are bound. The
      JSX for this example:
      <CodeBlock>
        {`<IDENTITY
  args={[<TRUE args={[<FALSE args={[ONE, TWO]} />, THREE]} />]}
/>`}
      </CodeBlock>
    </p>
    <p>
      Given the preceding Church encodings for true and false, here are the
      lambda expressions for and and or:
    </p>
    <ul>
      <li>
        and: <code>λp.λq.p q p</code>
      </li>
      <li>
        or: <code>λp.λq.p p q</code>
      </li>
    </ul>
    <p>
      Both of these take two arguments and these arguments should be{" "}
      <code>
        <Label name="TRUE" />
      </code>{" "}
      or{" "}
      <code>
        <Label name="FALSE" />
      </code>
      . These were a little tricky the first time I encountered them. Here are
      the four possibilities of what happens with{" "}
      <code>
        <Label name="AND" />
      </code>
      :
    </p>
    <ul>
      <li>
        If{" "}
        <code>
          <Label name="TRUE" />
        </code>{" "}
        is passed in as both <code>p</code> and <code>q</code> then it, as{" "}
        <code>p</code>, is called on both arguments and it returns the first,
        which is{" "}
        <code>
          <Label name="TRUE" />
        </code>
        .
      </li>
      <li>
        If{" "}
        <code>
          <Label name="TRUE" />
        </code>{" "}
        is passed in as <code>p</code> and{" "}
        <code>
          <Label name="FALSE" />
        </code>{" "}
        is passed in as <code>q</code> then{" "}
        <code>
          <Label name="TRUE" />
        </code>
        , as <code>p</code>, is called on both arguments and it returns the
        first, which is <code>q</code>, or{" "}
        <code>
          <Label name="FALSE" />
        </code>
        .
      </li>
      <li>
        If{" "}
        <code>
          <Label name="FALSE" />
        </code>{" "}
        is passed in as both <code>p</code> and <code>q</code> then it, as{" "}
        <code>p</code>, is called on both arguments and it returns the second,
        which is{" "}
        <code>
          <Label name="FALSE" />
        </code>
        .
      </li>
      <li>
        If{" "}
        <code>
          <Label name="FALSE" />
        </code>{" "}
        is passed in as <code>p</code> and{" "}
        <code>
          <Label name="TRUE" />
        </code>{" "}
        is passed in as <code>q</code> then{" "}
        <code>
          <Label name="FALSE" />
        </code>
        , as <code>p</code>, is called on both arguments and it returns the
        second, which is <code>p</code>, or{" "}
        <code>
          <Label name="FALSE" />
        </code>
        .
      </li>
    </ul>
    <p>
      Here's our little lambda truth table for{" "}
      <code>
        <Label name="AND" />
      </code>
      <CodeBlock>
        <Label name="AND" /> (<Label name="TRUE" /> <Label name="TRUE" />
        ) → <AND args={[TRUE, TRUE]} />
      </CodeBlock>
      <CodeBlock>
        <Label name="AND" /> (<Label name="TRUE" /> <Label name="FALSE" />
        ) → <AND args={[TRUE, FALSE]} />
      </CodeBlock>
      <CodeBlock>
        <Label name="AND" /> (<Label name="FALSE" /> <Label name="FALSE" />
        ) → <AND args={[FALSE, FALSE]} />
      </CodeBlock>
      <CodeBlock>
        <Label name="AND" /> (<Label name="FALSE" /> <Label name="TRUE" />
        ) → <AND args={[FALSE, TRUE]} />
      </CodeBlock>
      And the React component:
      <CodeBlock>
        {`const AND: FC<LambdaExprProps> = ({ args }) => (
  <βReduction
    λ={p => q => p({ args: [q, p] })}
    args={args}
  />
);`}
      </CodeBlock>
    </p>
    <p>
      <code>
        <Label name="OR" />
      </code>{" "}
      functions similarly. I leave it to the reader to work through it how we
      did for{" "}
      <code>
        <Label name="AND" />
      </code>
      . But, here's our little lambda truth table:
      <CodeBlock>
        <Label name="OR" /> (<Label name="TRUE" /> <Label name="TRUE" />
        ) → <OR args={[TRUE, TRUE]} />
      </CodeBlock>
      <CodeBlock>
        <Label name="OR" /> (<Label name="TRUE" /> <Label name="FALSE" />
        ) → <OR args={[TRUE, FALSE]} />
      </CodeBlock>
      <CodeBlock>
        <Label name="OR" /> (<Label name="FALSE" /> <Label name="FALSE" />
        ) → <OR args={[FALSE, FALSE]} />
      </CodeBlock>
      <CodeBlock>
        <Label name="OR" /> (<Label name="FALSE" /> <Label name="TRUE" />
        ) → <OR args={[FALSE, TRUE]} />
      </CodeBlock>
      And again, the React component:
      <CodeBlock>
        {`const OR: FC<LambdaExprProps> = ({ args }) => (
  <βReduction
    λ={p => q => p({ args: [p, q] })}
    args={args}
  />
);`}
      </CodeBlock>
      Notice all we did was switch the order of the arguments.
    </p>
    <p>Here is the lambda expression to represent branching logic:</p>
    <ul>
      <li>
        if...then...else: <code>λp.λa.λb.p a b</code>
      </li>
    </ul>
    <p>
      Given an argument <code>p</code> which is either{" "}
      <code>
        <Label name="TRUE" />
      </code>{" "}
      or{" "}
      <code>
        <Label name="FALSE" />
      </code>
      , this lambda will apply it to <code>a</code> and <code>b</code>. Well, we
      know how the boolean lambdas work. If <code>p</code> is{" "}
      <code>
        <Label name="TRUE" />
      </code>{" "}
      it will return the first argument, <code>a</code>. And vice versa if{" "}
      <code>p</code> is{" "}
      <code>
        <Label name="FALSE" />
      </code>
      .
      <CodeBlock>
        <Label name="IF_THEN_ELSE" /> (<Label name="TRUE" /> (
        <Label name="ONE" /> <Label name="TWO" />
        )) → <IF_THEN_ELSE args={[TRUE, ONE, TWO]} />
      </CodeBlock>
      <CodeBlock>
        <Label name="IF_THEN_ELSE" /> (<Label name="FALSE" /> (
        <Label name="ONE" /> <Label name="TWO" />
        )) → <IF_THEN_ELSE args={[FALSE, ONE, TWO]} />
      </CodeBlock>
      And finally, the React component implementation of branching logic in
      lambda calculus:
      <CodeBlock>
        {`const IF_THEN_ELSE: FC<LambdaExprProps> = ({ args }) => (
  <βReduction
    λ={p => a => b => p({ args: [a, b] })}
    args={args}
  />
);
`}
      </CodeBlock>
    </p>
  </Section>
);

export default Logic;
