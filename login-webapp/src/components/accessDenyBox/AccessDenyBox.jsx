import './AccessDenyBox.css'
import CenterBoxWrapper from 'components/centerBox/CenterBoxWrapper'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AccessDenyBox = () => {
  const navigate = useNavigate()

  const handleBackBtn = () => { navigate('/')}

  const { t } = useTranslation();

  return (
    <CenterBoxWrapper>
      <p>{t('notLoggedInToSeePage')}</p>
      <p>{t('userAccessDenied')}</p>
      <button className="deny-btn" onClick={handleBackBtn}>
        {t('backToLandingPage')}
      </button>
    </CenterBoxWrapper>
  )
}

export default AccessDenyBox
