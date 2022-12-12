import AccessDenyBox from 'components/accessDenyBox/AccessDenyBox'
import CenterBoxWrapper from 'components/centerBox/CenterBoxWrapper'
import LogOutButton from 'components/logOutButton/LogOutButton'
import NavBar from 'components/navBar/NavBar'
import { getRoleBasedNavLinks, RoleContext } from 'context/RoleContext'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

const ManagerDashboard = () => {
  const { userRole } = useContext(RoleContext)

  const {t} = useTranslation()

  return (
    <div>
      <NavBar
        title={t('managerDashboardPage')}
        routes={getRoleBasedNavLinks(userRole)}
        currentRoute="/manager-dashboard"
      />
      {userRole !== 'manager' ? (
        <AccessDenyBox />
      ) : (
        <CenterBoxWrapper>
          <p>{t('managerRestrictedMessage')}</p>
          <LogOutButton />
        </CenterBoxWrapper>
      )}
    </div>
  )
}

export default ManagerDashboard
