import React, { FC } from "react";
import λ from "../λ";

interface IDENTITYProps {
  children?: any;
}

const IDENTITY: FC<IDENTITYProps> = ({ children }) =>
  children ? <λ expr={x => x}>{children}</λ> : <>IDENTITY</>;

export default IDENTITY;
