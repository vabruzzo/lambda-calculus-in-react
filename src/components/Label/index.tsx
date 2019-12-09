import React, { FC, useState, useContext, KeyboardEvent } from "react";
import { ShowLambdasContext } from "../ShowLambdas";
import "./Label.css";

interface LabelProps {
  name: string;
}

const expressions: { [key: string]: string } = {
  IDENTITY: "λx.x",
  ZERO: "λf.λx.x",
  ONE: "λf.λx.f x",
  TWO: "λf.λx.f (f x)",
  THREE: "λf.λx.f (f (f x))",
  SUCCESSOR: "λn.λf.λx.f (n f x)",
  TRUE: "λx.λy.x",
  FALSE: "λx.λy.y",
  AND: "λp.λq.p q p",
  OR: "λp.λq.p p q",
  IF_THEN_ELSE: "λp.λa.λb.p a b",
  PAIR: "λx.λy.λf.f x y",
  FIRST: "λp.p (λx.λy.x x y)",
  SECOND: "λp.p (λx.λy.y x y)",
};

const Label: FC<LabelProps> = ({ name }) => {
  const [showλ, setShowλ] = useState(false);
  const { showAll } = useContext(ShowLambdasContext);

  const handleClick = () =>
    name !== "ANONYMOUS" && !showAll && setShowλ(!showλ);

  const handleKeyPress = (event: KeyboardEvent) =>
    name !== "ANONYMOUS" &&
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
