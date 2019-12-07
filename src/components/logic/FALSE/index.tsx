import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaTerm } from "../../../types";

interface FALSEProps {
  args: LambdaTerm[];
}

const FALSE: FC<FALSEProps> = args => <βReduction λ={x => y => y} {...args} />;

FALSE.displayName = "FALSE";

export default FALSE;
