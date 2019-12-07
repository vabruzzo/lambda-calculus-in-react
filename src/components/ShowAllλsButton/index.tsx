import React, { FC, useContext } from "react";
import { ShowλContext } from "../ShowAllλs";
import "./ShowAllλsButton.css";

interface ShowAllλsButtonProps {}

const ShowAllλsButton: FC<ShowAllλsButtonProps> = () => {
  const { showAll, setShowAll } = useContext(ShowλContext);

  const handleClick = () => setShowAll && setShowAll(!showAll);

  return (
    <button className="button" onClick={handleClick}>
      {showAll ? "Hide λs" : "Show all λs"}{" "}
    </button>
  );
};

export default ShowAllλsButton;
