import { ReactNode } from "react";

const PAIR = (args: any) => (f: any): ReactNode => f.args[0](args);

PAIR.displayName = "PAIR";

export default PAIR;
