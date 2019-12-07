import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaTerm } from "../../types";

interface IDENTITYProps {
  children: LambdaTerm[];
}

const IDENTITY: FC<IDENTITYProps> = ({ children }) => (
  <βReduction λ={x => x}>{children}</βReduction>
);

IDENTITY.displayName = "IDENTITY";

export default IDENTITY;
