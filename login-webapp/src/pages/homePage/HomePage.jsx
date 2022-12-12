import AccessDenyBox from 'components/accessDenyBox/AccessDenyBox'
import CenterBoxWrapper from 'components/centerBox/CenterBoxWrapper'
import LogOutButton from 'components/logOutButton/LogOutButton'
import NavBar from 'components/navBar/NavBar'
import { getRoleBasedNavLinks, RoleContext } from 'context/RoleContext'
import { useUserCookie } from 'helper/userCookie'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, redirect } from 'react-router-dom'

const HomePage = () => {
  const { nameCookie, usernameCookie } = useUserCookie()

  const { userRole } = useContext(RoleContext)

  const navigate = useNavigate()

  const {t} = useTranslation()

  return (
    <>
      <NavBar
        title={t('homePage')}
        routes={getRoleBasedNavLinks(userRole)}
        currentRoute="/home"
      />

      {userRole !== '' ? (
        <CenterBoxWrapper>
          <p>{t('name')}: {nameCookie}</p>
          <p>{t('username')}: {usernameCookie}</p>
          <p>{t('role')}: {userRole.toUpperCase()}</p>
          <LogOutButton />
        </CenterBoxWrapper>
      ) : (
        <AccessDenyBox />
      )}
    </>
  )
}

export default HomePage
