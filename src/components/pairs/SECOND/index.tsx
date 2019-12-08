import React, { FC } from "react";
import βReduction from "../../βReduction";
import FALSE from "../../logic/FALSE";
import { LambdaExprProps } from "../../../types";

const SECOND: FC<LambdaExprProps> = args => (
  <βReduction λ={(p: any) => p({ args: [FALSE] })} {...args} />
);

SECOND.displayName = "SECOND";

export default SECOND;
