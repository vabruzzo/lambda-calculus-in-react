import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaExprProps } from "../../../types";

const FALSE: FC<LambdaExprProps> = ({ args }) => (
  <βReduction λ={x => y => y} args={args} />
);

FALSE.displayName = "FALSE";

export default FALSE;
