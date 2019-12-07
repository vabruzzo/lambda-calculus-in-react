import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaTerm } from "../../../types";

interface ANDProps {
  args: LambdaTerm[];
}

const AND: FC<ANDProps> = args => (
  <βReduction λ={(p: any) => q => p({ args: [q, p] })} {...args} />
);

AND.displayName = "AND";

export default AND;
