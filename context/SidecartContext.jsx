import { createContext, useState } from 'react';

const SidecartContext = createContext();

export const SidecartProvider = ({ children }) => {
  const [isSidecartOpen, setIsSidecartOpen] = useState(false);

  const openSidecart = () => setIsSidecartOpen(true);
  const closeSidecart = () => setIsSidecartOpen(false);
  const toggleSidecart = () => setIsSidecartOpen(prev => !prev);

  return (
    <SidecartContext.Provider value={{ isSidecartOpen, openSidecart, closeSidecart, toggleSidecart }}>
      {children}
    </SidecartContext.Provider>
  );
};

export default SidecartContext;

