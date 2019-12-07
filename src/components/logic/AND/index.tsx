import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaExprProps } from "../../../types";

const AND: FC<LambdaExprProps> = args => (
  <βReduction λ={(p: any) => q => p({ args: [q, p] })} {...args} />
);

AND.displayName = "AND";

export default AND;
