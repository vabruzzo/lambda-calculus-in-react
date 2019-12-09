import React, { FC } from "react";
import βReduction from "../../βReduction";
import TRUE from "../../logic/TRUE";
import { LambdaExprProps } from "../../../types";

const FIRST: FC<LambdaExprProps> = ({ args }) => (
  <βReduction
    λ={p => {
      if (typeof p === "function") {
        return p({ args: [TRUE] });
      }
    }}
    args={args}
  />
);

FIRST.displayName = "FIRST";

export default FIRST;
