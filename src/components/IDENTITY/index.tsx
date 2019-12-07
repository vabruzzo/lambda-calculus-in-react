import React, { FC } from "react";
import βReduction from "../βReduction";
import { LambdaTerm } from "../../types";

interface IDENTITYProps {
  args: LambdaTerm[];
}

const IDENTITY: FC<IDENTITYProps> = args => <βReduction λ={x => x} {...args} />;

IDENTITY.displayName = "IDENTITY";

export default IDENTITY;
