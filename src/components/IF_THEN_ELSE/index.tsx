import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaTerm } from "../../types";

interface IF_THEN_ELSEProps {
  children?: LambdaTerm[];
}

const IF_THEN_ELSE: FC<IF_THEN_ELSEProps> = ({ children }) =>
  children ? (
    //@ts-ignore
    <βReduction λ={P => a => b => P({ children: [a, b] })}>
      {children}
    </βReduction>
  ) : null;

IF_THEN_ELSE.displayName = "IF_THEN_ELSE";

export default IF_THEN_ELSE;
