import { FC } from "react";
import { LambdaTerm, Abstraction } from "../../types";

interface βReductionProps {
  λ: Abstraction;
  children: LambdaTerm[];
}

const βReduction: FC<βReductionProps> = ({ λ, children }) => {
  const application = children.reduce(
    (accumulator: any, current: LambdaTerm) => accumulator(current),
    λ
  );

  return typeof application === "function"
    ? application.displayName
    : application;
};

export default βReduction;
