const PAIR = (args: any) => (f: any) => f.args[0](args);

PAIR.displayName = "PAIR";

export default PAIR;
