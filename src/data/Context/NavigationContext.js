import React, { useState, useContext, createContext } from 'react'


const NavigationContext = createContext()
const UpdateNavigationContext = createContext()


export function useNavigation() {
  return useContext(NavigationContext)
}

export function useUpdateNavigation() {
  return useContext(UpdateNavigationContext)
}


export function NavigationProvider({ children }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <NavigationContext.Provider value={activeTab}>
      <UpdateNavigationContext.Provider value={setActiveTab}>
        {children}
      </UpdateNavigationContext.Provider>
    </NavigationContext.Provider>
  )
}
