"use client";
import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  inpValue: string;
  setInpValue: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [inpValue, setInpValue] = useState<string>("");
  return <AppContext.Provider value={{ inpValue, setInpValue }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
