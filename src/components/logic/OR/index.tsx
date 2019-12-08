import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaExprProps } from "../../../types";

const OR: FC<LambdaExprProps> = ({ args }) => (
  <βReduction λ={(p: any) => q => p({ args: [p, q] })} args={args} />
);

OR.displayName = "OR";

export default OR;
