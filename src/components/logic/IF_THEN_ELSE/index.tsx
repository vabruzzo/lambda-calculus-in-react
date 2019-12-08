import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaExprProps } from "../../../types";

const IF_THEN_ELSE: FC<LambdaExprProps> = ({ args }) => (
  <βReduction λ={(p: any) => a => b => p({ args: [a, b] })} args={args} />
);

IF_THEN_ELSE.displayName = "IF_THEN_ELSE";

export default IF_THEN_ELSE;
