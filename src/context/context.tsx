import { createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <DataContext.Provider>{children}</DataContext.Provider>;
};
