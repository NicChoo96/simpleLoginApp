import AccessDenyBox from 'components/accessDenyBox/AccessDenyBox'
import CenterBoxWrapper from 'components/centerBox/CenterBoxWrapper'
import LogOutButton from 'components/logOutButton/LogOutButton'
import NavBar from 'components/navBar/NavBar'
import { getRoleBasedNavLinks, RoleContext } from 'context/RoleContext'
import { useUserCookie } from 'helper/userCookie'
import { useContext } from 'react'
import { useNavigate, redirect } from 'react-router-dom'

const HomePage = () => {
  const { nameCookie, usernameCookie } = useUserCookie()

  const { userRole } = useContext(RoleContext)

  const navigate = useNavigate()

  return (
    <>
      <NavBar
        title="Home"
        routes={getRoleBasedNavLinks(userRole)}
        currentRoute="/home"
      />

      {userRole !== '' ? (
        <CenterBoxWrapper>
          <p>Name: {nameCookie}</p>
          <p>Username: {usernameCookie}</p>
          <p>Role: {userRole.toUpperCase()}</p>
          <LogOutButton />
        </CenterBoxWrapper>
      ) : (
        <AccessDenyBox />
      )}
    </>
  )
}

export default HomePage
