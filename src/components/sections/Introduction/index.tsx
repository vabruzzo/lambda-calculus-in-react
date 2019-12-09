import React, { FC } from "react";
import Section from "../../Section";
import Link from "../../Link";

const Introduction: FC = () => (
  <Section heading={"Introduction"}>
    <p>
      This project is an attempt to implement something <b>close</b> to{" "}
      <Link to="https://en.wikipedia.org/wiki/Lambda_calculus">
        lambda calculus
      </Link>{" "}
      in <Link to="https://reactjs.org/">React</Link>. Why? Why not? Mostly for
      fun, but also to learn more about both. The idea for this was heavily
      inspired by Jim Weirich's amazing talk{" "}
      <Link to="https://www.youtube.com/watch?v=FITJMJjASUs">
        Y Not - Adventures in Functional Programming
      </Link>
      .
    </p>
    <p>
      To jump right into the code, follow these links to the various React
      components:
    </p>
    <ul>
      <li>
        <Link to="https://github.com/thoughtbyte/lambda-calculus-in-react/blob/master/src/components/%CE%B2Reduction/index.tsx">
          βReduction
        </Link>
      </li>
      <li>
        <Link to="https://github.com/thoughtbyte/lambda-calculus-in-react/blob/master/src/components/IDENTITY/index.tsx">
          IDENTITY
        </Link>
      </li>
      <li>
        <Link to="https://github.com/thoughtbyte/lambda-calculus-in-react/tree/master/src/components/numbers">
          numbers
        </Link>
      </li>
      <li>
        <Link to="https://github.com/thoughtbyte/lambda-calculus-in-react/tree/master/src/components/logic">
          logic
        </Link>
      </li>
      <li>pairs: in progress</li>
      <li>recursion: in progress</li>
    </ul>
    <p>
      The code snippets in this tutorial omit some things like type checking for
      readability.
    </p>
    <p>
      Feedback? Email{" "}
      <Link to="mailto:vgabruzzo@gmail.com" external={false}>
        vgabruzzo@gmail.com
      </Link>
    </p>
  </Section>
);

export default Introduction;
