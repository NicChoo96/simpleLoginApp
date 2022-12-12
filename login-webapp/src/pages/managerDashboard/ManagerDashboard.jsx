import AccessDenyBox from 'components/accessDenyBox/AccessDenyBox'
import CenterBoxWrapper from 'components/centerBox/CenterBoxWrapper'
import LogOutButton from 'components/logOutButton/LogOutButton'
import NavBar from 'components/navBar/NavBar'
import { getRoleBasedNavLinks, RoleContext } from 'context/RoleContext'
import { useContext } from 'react'

const ManagerDashboard = () => {
  const { userRole } = useContext(RoleContext)

  return (
    <div>
      <NavBar
        title="Manager Dashboard"
        routes={getRoleBasedNavLinks(userRole)}
        currentRoute="/manager-dashboard"
      />
      {userRole !== 'manager' ? (
        <AccessDenyBox />
      ) : (
        <CenterBoxWrapper>
          <p>This page is restricted only for the manager to see</p>
          <LogOutButton />
        </CenterBoxWrapper>
      )}
    </div>
  )
}

export default ManagerDashboard
