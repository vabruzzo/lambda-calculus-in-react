import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaTerm } from "../../types";

interface FALSEProps {
  children: LambdaTerm[];
}

const FALSE: FC<FALSEProps> = ({ children }) => (
  <βReduction λ={x => y => y}>{children}</βReduction>
);

FALSE.displayName = "FALSE";

export default FALSE;
