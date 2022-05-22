import React, { useState, useContext, createContext } from 'react'


const NavigationContext = createContext()


export function useNavigation() {
  return useContext(NavigationContext)
}


export function NavigationProvider({ children }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [extra, setExtra] = useState({});
  const [areaToSearch, setAreaToSearch] = useState("");
  const [reload, setReload] = useState(false);

  const updateNavigation = (tab) => {
    setActiveTab(tab);
  }

  const updateAreaToSearch = (searchKey) => {
    if (searchKey) {
      const searchCategory = searchKey.split(" ")[0];

      switch (searchCategory) {
        case '/u':
          setAreaToSearch('');
          setTimeout(() => {
            setAreaToSearch('users');
          }, 100);
          setExtra({ searchKeyword: searchKey });
          break;
        case '/r':
          setAreaToSearch('rooms');
          break
        case '/e':
          setAreaToSearch('events');
          break
        default:
          console.log('search default');
          break;
      }
    }
  }

  return (
    <NavigationContext.Provider value={{
      activeTab,
      updateNavigation,
      extra,
      setExtra,
      areaToSearch,
      updateAreaToSearch,
      reload,
      setReload
    }}>
      {children}
    </NavigationContext.Provider>
  )
}
