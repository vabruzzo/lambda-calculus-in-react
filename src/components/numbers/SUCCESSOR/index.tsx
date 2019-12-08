import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaExprProps } from "../../../types";

const SUCCESSOR: FC<LambdaExprProps> = args => {
  return <βReduction λ={(n: any) => (f: any) => x => f(n(f(x)))} {...args} />;
};

SUCCESSOR.displayName = "SUCCESSOR";

export default SUCCESSOR;
