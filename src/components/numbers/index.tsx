import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaExprProps } from "../../types";

const ZERO: FC<LambdaExprProps> = args => (
  <βReduction λ={f => x => x} {...args} />
);

ZERO.displayName = "ZERO";

const ONE: FC<LambdaExprProps> = args => (
  <βReduction λ={(f: any) => x => f(x)} {...args} />
);

ONE.displayName = "ONE";

const TWO: FC<LambdaExprProps> = args => (
  <βReduction λ={(f: any) => x => f(f(x))} {...args} />
);

TWO.displayName = "TWO";

const THREE: FC<LambdaExprProps> = args => (
  <βReduction λ={(f: any) => x => f(f(f(x)))} {...args} />
);

THREE.displayName = "THREE";

export { ZERO, ONE, TWO, THREE };