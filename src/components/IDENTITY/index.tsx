import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaTerm } from "../../types";

interface IDENTITYProps {
  children?: LambdaTerm[];
}

const IDENTITY: FC<IDENTITYProps> = ({ children }) =>
  children ? <βReduction λ={x => x}>{children}</βReduction> : null;

IDENTITY.displayName = "IDENTITY";

export default IDENTITY;
