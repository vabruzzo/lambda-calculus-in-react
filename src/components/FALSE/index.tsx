import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaTerm } from "../../types";

interface FALSEProps {
  children?: LambdaTerm[];
}

const FALSE: FC<FALSEProps> = ({ children }) =>
  children ? (
    <βReduction λ={x => (y: LambdaTerm) => y}>{children}</βReduction>
  ) : null;

FALSE.displayName = "FALSE";

export default FALSE;
