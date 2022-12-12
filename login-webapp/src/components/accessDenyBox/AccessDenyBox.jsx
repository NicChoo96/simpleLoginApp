import './AccessDenyBox.css'
import CenterBoxWrapper from 'components/centerBox/CenterBoxWrapper'
import { useNavigate } from 'react-router-dom'

const AccessDenyBox = () => {
  const navigate = useNavigate()

  const handleBackBtn = () => { navigate('/')}

  return (
    <CenterBoxWrapper>
      <p>You are not logged in yet to see this page</p>
      <p>User access denied</p>
      <button className="deny-btn" onClick={handleBackBtn}>
        Back to Landing Page
      </button>
    </CenterBoxWrapper>
  )
}

export default AccessDenyBox
