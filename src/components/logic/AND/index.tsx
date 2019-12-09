import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaExprProps } from "../../../types";

const AND: FC<LambdaExprProps> = ({ args }) => (
  <βReduction
    λ={p => q => {
      if (typeof p === "function") {
        return p({ args: [q, p] });
      }
    }}
    args={args}
  />
);

AND.displayName = "AND";

export default AND;
