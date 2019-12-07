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

  return typeof application === "function" ? (
    <Label name={application.displayName || "ANONYMOUS"} />
  ) : (
    application
  );
};

export default βReduction;
