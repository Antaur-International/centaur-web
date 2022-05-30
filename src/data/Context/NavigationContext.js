import React, { useState, useContext, createContext, useEffect } from 'react'


const NavigationContext = createContext()


export function useNavigation() {
  return useContext(NavigationContext)
}


export function NavigationProvider({ children }) {
  const [activeTab, setActiveTab] = useState("");
  const [extra, setExtra] = useState({});
  const [areaToSearch, setAreaToSearch] = useState("");
  const [reload, setReload] = useState(false);

  const updateNavigation = (tab) => {
    setActiveTab(tab);
    sessionStorage.setItem('activeTab', tab)
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
          setAreaToSearch('');
          setTimeout(() => {
            setAreaToSearch('rooms');
          }, 100);
          setExtra({ searchKeyword: searchKey });
          break
        case '/e':
          setAreaToSearch('');
          setTimeout(() => {
            setAreaToSearch('events');
          }, 100);
          setExtra({ searchKeyword: searchKey });
          break
        default:
          console.log('search default');
          break;
      }
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem('activeTab')) {
      setActiveTab(sessionStorage.getItem('activeTab'));
    }

  }, [])

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
