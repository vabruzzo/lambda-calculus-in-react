import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaExprProps } from "../../../types";

const TRUE: FC<LambdaExprProps> = args => (
  <βReduction λ={x => y => x} {...args} />
);

TRUE.displayName = "TRUE";

export default TRUE;
