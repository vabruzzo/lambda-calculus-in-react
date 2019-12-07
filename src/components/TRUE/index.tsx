import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaTerm } from "../../types";

interface TRUEProps {
  children: LambdaTerm[];
}

const TRUE: FC<TRUEProps> = ({ children }) => (
  <βReduction λ={x => y => x}>{children}</βReduction>
);

TRUE.displayName = "TRUE";

export default TRUE;
