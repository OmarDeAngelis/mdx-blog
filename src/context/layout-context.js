import React, { useContext, useState } from "react";

const LayoutContext = React.createContext();

const LayoutProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <LayoutContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

const UseLayoutContext = () => {
  return useContext(LayoutContext);
};

export { UseLayoutContext, LayoutProvider };
