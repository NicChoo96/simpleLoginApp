import CenterBoxWrapper from 'components/centerBox/CenterBoxWrapper'
import NavBar from 'components/navBar/NavBar'
import { getRoleBasedNavLinks, RoleContext } from 'context/RoleContext'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

const LandingPage = () => {
  const { userRole } = useContext(RoleContext)

  const navBarRoutes = getRoleBasedNavLinks(userRole)

  const { t } = useTranslation()

  return (
    <div>
      <NavBar routes={navBarRoutes} title={t('landingPage')} />
      <CenterBoxWrapper>
        <h3>{t('welcomeLandingTitle')}</h3>
        <p>{t('clickLoginInstruction')}</p>
      </CenterBoxWrapper>
    </div>
  )
}

export default LandingPage
