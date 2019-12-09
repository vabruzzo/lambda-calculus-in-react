import React, { FC } from "react";
import Section from "../../Section";
import Link from "../../Link";

const Recursion: FC = () => (
  <Section heading={"Recursion"}>
    <p>In progress... One day, maybe.</p>
    <p></p>
    <p></p>
    <p>
      Feedback? Email{" "}
      <Link to="mailto:vgabruzzo@gmail.com" external={false}>
        vgabruzzo@gmail.com
      </Link>
    </p>
  </Section>
);

export default Recursion;
