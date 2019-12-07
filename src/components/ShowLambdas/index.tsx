import React, { useState, FC, ReactNode } from "react";

type ShowLambdas = {
  showAll: boolean;
  setShowAll: ((val: boolean) => void) | null;
};

export const ShowLambdasContext = React.createContext<ShowLambdas>({
  showAll: false,
  setShowAll: null,
});

interface ShowLambdasProps {
  children: ReactNode;
}

const ShowLambdas: FC<ShowLambdasProps> = ({ children }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <ShowLambdasContext.Provider value={{ showAll, setShowAll }}>
      {children}
    </ShowLambdasContext.Provider>
  );
};

export default ShowLambdas;
