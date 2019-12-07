import React, { ReactNode, FC } from "react";

interface λProps {
  expr: (arg: any) => ReactNode;
  children: any[];
}

const λ: FC<λProps> = ({ expr, children }) => {
  const application = children.reduce((accumulator: any, current: any) => {
    return accumulator(current);
  }, expr);

  return (
    <pre>
      <code>{application}</code>
    </pre>
  );
};

export default λ;
