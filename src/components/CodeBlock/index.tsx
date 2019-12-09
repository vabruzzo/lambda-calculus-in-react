import React, { FC, ReactNode } from "react";
import "./CodeBlock.css";

interface CodeBlockProps {
  children: ReactNode;
}

const CodeBlock: FC<CodeBlockProps> = ({ children }) => (
  <span className="codeBlock">{children}</span>
);

export default CodeBlock;
