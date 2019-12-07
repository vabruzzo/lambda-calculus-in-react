import React, { FC, ReactNode } from "react";

interface CodeBlockProps {
  children?: ReactNode;
}

const CodeBlock: FC<CodeBlockProps> = ({ children }) => (
  <pre>
    <code>{children}</code>
  </pre>
);

export default CodeBlock;
