import { createContext, useState } from "react";

export const NavContext = createContext<
  | {
      navOpen: boolean;
      setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <NavContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavContext.Provider>
  );
};
