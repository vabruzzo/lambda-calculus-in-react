import React, { FC } from "react";
import βReduction from "../../βReduction";
import FALSE from "../../logic/FALSE";
import { LambdaExprProps } from "../../../types";

const SECOND: FC<LambdaExprProps> = ({ args }) => (
  <βReduction
    λ={p => {
      if (typeof p === "function") {
        return p({ args: [FALSE] });
      }
    }}
    args={args}
  />
);

SECOND.displayName = "SECOND";

export default SECOND;
