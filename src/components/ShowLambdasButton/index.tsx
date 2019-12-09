import React, { FC, useContext } from "react";
import { ShowLambdasContext } from "../ShowLambdas";
import "./ShowLambdasButton.css";

interface ShowLambdasButtonProps {}

const ShowLambdasButton: FC<ShowLambdasButtonProps> = () => {
  const { showAll, setShowAll } = useContext(ShowLambdasContext);

  const handleClick = () => setShowAll && setShowAll(!showAll);

  return (
    <button className="button" onClick={handleClick}>
      {showAll ? "Hide λs" : "Show λs"}{" "}
    </button>
  );
};

export default ShowLambdasButton;
