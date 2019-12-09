import React, { FC, ReactNode } from "react";
import "./Link.css";

interface LinkProps {
  to: string;
  children: ReactNode;
  external?: boolean;
}

const Link: FC<LinkProps> = ({ to, children, external = true }) => {
  const linkProps = {
    href: to,
    target: external ? "_blank" : "_self",
    rel: external ? "noopener noreferrer" : undefined,
  };

  return (
    <a className="link" {...linkProps}>
      {children}
    </a>
  );
};

export default Link;
