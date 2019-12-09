import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaExprProps } from "../../types";

const ZERO: FC<LambdaExprProps> = ({ args }) => (
  <βReduction λ={f => x => x} args={args} />
);

ZERO.displayName = "ZERO";

const ONE: FC<LambdaExprProps> = ({ args }) => (
  <βReduction
    λ={f => x => {
      if (typeof f === "function") {
        return f(x);
      }
    }}
    args={args}
  />
);

ONE.displayName = "ONE";

const TWO: FC<LambdaExprProps> = ({ args }) => (
  <βReduction
    λ={f => x => {
      if (typeof f === "function") {
        return f(f(x));
      }
    }}
    args={args}
  />
);

TWO.displayName = "TWO";

const THREE: FC<LambdaExprProps> = ({ args }) => (
  <βReduction
    λ={f => x => {
      if (typeof f === "function") {
        return f(f(f(x)));
      }
    }}
    args={args}
  />
);

THREE.displayName = "THREE";

const NumberLabels = ["ZERO", "ONE", "TWO", "THREE"];

const numberCounter = () => {
  let i = 1;

  return () => NumberLabels[i++];
};

export { ZERO, ONE, TWO, THREE, numberCounter };
