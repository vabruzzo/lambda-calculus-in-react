import { ReactNode } from "react";

export type Abstraction = (λ: LambdaTerm) => LambdaTerm;

export type LambdaTerm = string | number | ReactNode | Abstraction;

export interface LambdaExprProps {
  args: LambdaTerm[];
}
