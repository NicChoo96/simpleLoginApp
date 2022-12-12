import CenterBoxWrapper from 'components/centerBox/CenterBoxWrapper'
import NavBar from 'components/navBar/NavBar'
import { getRoleBasedNavLinks, RoleContext } from 'context/RoleContext'
import { useContext } from 'react'

const LandingPage = () => {
  const { userRole } = useContext(RoleContext)

  const navBarRoutes = getRoleBasedNavLinks(userRole)

  return (
    <div>
      <NavBar routes={navBarRoutes} title="Landing Page" />
      <CenterBoxWrapper>
        <h3>Welcome to the landing page of this application</h3>
        <p>Start by clicking on Login at the top</p>
      </CenterBoxWrapper>
    </div>
  )
}

export default LandingPage
