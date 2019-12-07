import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaExprProps } from "../../types";

const ZERO: FC<LambdaExprProps> = args => (
  <βReduction λ={f => x => x} {...args} />
);

ZERO.displayName = "ZERO";

export { ZERO };
