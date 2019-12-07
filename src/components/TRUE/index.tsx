import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaTerm } from "../../types";

interface TRUEProps {
  children?: LambdaTerm[];
}

const TRUE: FC<TRUEProps> = ({ children }) =>
  children ? (
    <βReduction λ={x => (_y: LambdaTerm) => x}>{children}</βReduction>
  ) : null;

TRUE.displayName = "TRUE";

export default TRUE;
