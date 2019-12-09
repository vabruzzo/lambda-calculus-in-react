import React, { FC, ReactNode } from "react";
import ShowLambdas from "../ShowLambdas";
import "./Section.css";

interface SectionProps {
  heading: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ heading, children }) => (
  <section>
    <h2>{heading}</h2>
    <ShowLambdas>{children}</ShowLambdas>
  </section>
);

export default Section;
