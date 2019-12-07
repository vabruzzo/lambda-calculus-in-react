import React, { FC, useState, useContext, KeyboardEvent } from "react";
import { ShowLambdasContext } from "../ShowLambdas";
import "./Label.css";

interface LabelProps {
  name: string;
}

const expressions: any = {
  IDENTITY: "λx.x",
  TRUE: "λx.λy.x",
  FALSE: "λx.λy.y",
  AND: "λp.λq.p q p",
  OR: "λp.λq.p p q",
  IF_THEN_ELSE: "λp.λa.λb.p a b",
};

const Label: FC<LabelProps> = ({ name }) => {
  const [showλ, setShowλ] = useState(false);
  const { showAll } = useContext(ShowLambdasContext);

  const handleClick = () => !showAll && setShowλ(!showλ);

  const handleKeyPress = (event: KeyboardEvent) =>
    (event.key === "Enter" || event.key === " ") &&
    !showAll &&
    setShowλ(!showλ);

  return (
    <span
      className="label"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
    >
      {showλ || showAll ? expressions[name] : name}
    </span>
  );
};

export default Label;
