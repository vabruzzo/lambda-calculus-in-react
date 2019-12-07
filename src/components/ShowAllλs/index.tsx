import React, { useState, FC, ReactNode } from "react";

type Showλs = {
  showAll: boolean;
  setShowAll: ((val: boolean) => void) | null;
};

export const ShowλContext = React.createContext<Showλs>({
  showAll: false,
  setShowAll: null,
});

interface ShowAllλsProps {
  children: ReactNode;
}

const ShowAllλs: FC<ShowAllλsProps> = ({ children }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <ShowλContext.Provider value={{ showAll, setShowAll }}>
      {children}
    </ShowλContext.Provider>
  );
};

export default ShowAllλs;
