import React, { FC } from "react";
import λ from "../λ";

interface TRUEProps {
  children?: any;
}

const TRUE: FC<TRUEProps> = ({ children }) =>
  children ? <λ expr={x => (_y: any) => x}>{children}</λ> : <>TRUE</>;

export default TRUE;
