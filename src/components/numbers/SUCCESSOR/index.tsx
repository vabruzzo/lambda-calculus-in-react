import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaExprProps } from "../../../types";

const SUCCESSOR: FC<LambdaExprProps> = ({ args }) => (
  <βReduction
    λ={n => f => x => {
      if (typeof f === "function" && typeof n === "function") {
        return f(n({ args: [f, x] }));
      }
    }}
    args={args}
  />
);

SUCCESSOR.displayName = "SUCCESSOR";

export default SUCCESSOR;
