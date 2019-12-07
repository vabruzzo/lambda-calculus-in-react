import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaTerm } from "../../../types";

interface IF_THEN_ELSEProps {
  args: LambdaTerm[];
}

const IF_THEN_ELSE: FC<IF_THEN_ELSEProps> = args => (
  <βReduction λ={(p: any) => a => b => p({ args: [a, b] })} {...args} />
);

IF_THEN_ELSE.displayName = "IF_THEN_ELSE";

export default IF_THEN_ELSE;
