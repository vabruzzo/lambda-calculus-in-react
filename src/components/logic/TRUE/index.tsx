import React, { FC } from "react";
import βReduction from "../../βReduction";
import { LambdaTerm } from "../../../types";

interface TRUEProps {
  args: LambdaTerm[];
}

const TRUE: FC<TRUEProps> = args => <βReduction λ={x => y => x} {...args} />;

TRUE.displayName = "TRUE";

export default TRUE;
