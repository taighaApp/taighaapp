import React, { createContext, useState, useContext } from 'react';

// Create the context
const GlobalContext = createContext<{
    bottomSheetShow: boolean;
    isAboveThreshold: boolean;
    setBottomSheetShow: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAboveThreshold: React.Dispatch<React.SetStateAction<boolean>>;
  } | null>(null);

// Create the Provider component
export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [bottomSheetShow, setBottomSheetShow] = useState(true);
    //attechement,send buttom show state globally use
    const [isAboveThreshold, setIsAboveThreshold] = useState(false);


  return (
    <GlobalContext.Provider value={{ bottomSheetShow, setBottomSheetShow, isAboveThreshold, setIsAboveThreshold }}>
      {children}
    </GlobalContext.Provider>
  );
};


// Create a custom hook for easy access to the context
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
  };
