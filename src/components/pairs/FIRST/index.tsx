import React, { FC } from "react";
import βReduction from "../../βReduction";
import TRUE from "../../logic/TRUE";
import { LambdaExprProps } from "../../../types";

const FIRST: FC<LambdaExprProps> = args => (
  <βReduction λ={(p: any) => p({ args: [TRUE] })} {...args} />
);

FIRST.displayName = "FIRST";

export default FIRST;
