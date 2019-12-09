import React, { FC } from "react";
// import CodeBlock from "../../CodeBlock";
import Section from "../../Section";
// import Label from "../../Label";
// import { ONE, TWO } from "../../numbers";
// import PAIR from "../../pairs/PAIR";
// import FIRST from "../../pairs/FIRST";
// import SECOND from "../../pairs/SECOND";

const Pairs: FC = () => (
  <Section heading={"Pairs"}>
    <p>In progress...</p>
    {/* <CodeBlock>
      <Label name="PAIR" /> (<Label name="ONE" /> <Label name="TWO" />) → HoC{" "}
      {PAIR({ args: [ONE, TWO] })}
    </CodeBlock>
    <CodeBlock>
      <Label name="FIRST" /> (<Label name="PAIR" /> (
      <Label name="ONE" /> <Label name="TWO" />
      )) → <FIRST args={[PAIR({ args: [ONE, TWO] })]} />
    </CodeBlock>
    <CodeBlock>
      <Label name="SECOND" /> (<Label name="PAIR" /> (
      <Label name="ONE" /> <Label name="TWO" />
      )) → <SECOND args={[PAIR({ args: [ONE, TWO] })]} />
    </CodeBlock> */}
  </Section>
);

export default Pairs;
