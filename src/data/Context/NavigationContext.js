import React, { useState, useContext, createContext } from 'react'


const NavigationContext = createContext()


export function useNavigation() {
  return useContext(NavigationContext)
}


export function NavigationProvider({ children }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [extra, setExtra] = useState({});

  const updateNavigation = (tab) => {
    setActiveTab(tab);
  }

  return (
    <NavigationContext.Provider value={{ activeTab, updateNavigation, extra, setExtra }}>
      {children}
    </NavigationContext.Provider>
  )
}
