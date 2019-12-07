import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaExprProps } from "../../types";

const IDENTITY: FC<LambdaExprProps> = args => (
  <βReduction λ={x => x} {...args} />
);

IDENTITY.displayName = "IDENTITY";

export default IDENTITY;
