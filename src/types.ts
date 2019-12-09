import { ReactNode } from "react";

export type Abstraction = (λ: LambdaTerm) => LambdaTerm;

export type LambdaTerm = ReactNode | Abstraction;

export interface LambdaExprProps {
  args: LambdaTerm[];
}
