import React, { FC } from "react";
import Label from "../Label";
import { LambdaTerm, Abstraction } from "../../types";

interface βReductionProps {
  λ: Abstraction;
  args: LambdaTerm[];
}

const βReduction: FC<βReductionProps> = ({ λ, args }) => {
  const application = args.reduce(
    (accumulator: any, current: LambdaTerm) => accumulator(current),
    λ
  );

  /**
   * Since application is usually a function, the lambda expression React
   * components have display names to render instead.
   * Sometimes, the application may be a string or number. We don't really have
   * these in lambda calculus, but they are used for demo purposes.
   */
  return typeof application === "function" ? (
    <Label name={application.displayName || "ANONYMOUS"} />
  ) : (
    application
  );
};

export default βReduction;
