import React, { useState } from 'react'
import { allRoutesStore, nonRestrictedLinks, restrictedLinks } from 'routesData'

export const RoleContext = React.createContext()

// Possible limited route for user to access
export const getRoledBasedAccessRoutes = (role) => {
  //   switch (role) {
  //     // Access to all pages
  //     case 'manager':
  //       return [...nonRestrictedLinks, ...restrictedLinks]
  //     // Restrict normal user to access only landing page, home page and login page
  //     case 'user':
  //       return [...nonRestrictedLinks]
  //     // Restrict guest user to access only landing page and login page
  //     default:
  //       return [allRoutesStore.landingPage, allRoutesStore.loginPage]
  //   }
  return [...nonRestrictedLinks, ...restrictedLinks]
}

export const getRoleBasedNavLinks = (role) => {
  switch (role) {
    case 'manager':
      return [allRoutesStore.homePage, ...restrictedLinks]
    case 'user':
      return [allRoutesStore.homePage]
    default:
      return [allRoutesStore.loginPage]
  }
}

export const RoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('')

  const removeRole = ()=> {
    setUserRole('')
  }

  return (
    <RoleContext.Provider value={{ userRole, setUserRole, removeRole }}>
      {children}
    </RoleContext.Provider>
  )
}
