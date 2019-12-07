import React, { FC } from "react";
import λ from "../λ";

interface FALSEProps {
  children?: any;
}

const FALSE: FC<FALSEProps> = ({ children }) =>
  children ? <λ expr={x => (y: any) => y}>{children}</λ> : <>FALSE</>;

export default FALSE;
