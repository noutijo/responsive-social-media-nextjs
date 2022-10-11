import React, { useState } from "react";

type asideType = {
  isopen: boolean;
  setMenuStatus: (a: (a: boolean) => boolean) => void;
};

const asideContext = React.createContext<asideType>({
  isopen: false,
  setMenuStatus: () => {},
});

// update state and allow to handle displaying aside menu bar
export const useDrawer = () => {
  return React.useContext(asideContext);
};

export const AsideBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isopen, setMenuStatus] = useState<boolean>(false);

  return (
    <asideContext.Provider value={{ isopen, setMenuStatus }}>
      {children}
    </asideContext.Provider>
  );
};
