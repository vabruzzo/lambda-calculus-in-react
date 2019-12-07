import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaTerm } from "../../../types";

interface ORProps {
  args: LambdaTerm[];
}

const OR: FC<ORProps> = args => (
  <βReduction λ={(p: any) => q => p({ args: [p, q] })} {...args} />
);

OR.displayName = "OR";

export default OR;
