import axios from 'axios'
import { useContext, useState } from 'react'
import './LoginPage.css'
import { sha256 } from 'js-sha256'
import { useUserCookie } from '../../helper/userCookie'
import { useNavigate } from 'react-router-dom'
import { RoleContext } from 'context/RoleContext'
import CenterBoxWrapper from 'components/centerBox/CenterBoxWrapper'
import { useTranslation } from 'react-i18next'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const { setNameCookie, setUsernameCookie } = useUserCookie()

  const { t } = useTranslation()

  const { setUserRole } = useContext(RoleContext)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    let usernameErrorMessage = ''
    let passwordErrorMessage = ''

    // Validation
    if (username === '') usernameErrorMessage = t('usernameRequired')
    if (password === '') passwordErrorMessage = t('passwordRequired')

    if (
      password.length > 1 &&
      !password.match(
        /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{4,}$/,
      )
    ) {
      passwordErrorMessage = t('passwordRequirement')
    }

    setUsernameError(usernameErrorMessage)
    setPasswordError(passwordErrorMessage)

    if (usernameErrorMessage !== '' || passwordErrorMessage !== '') {
      return
    }

    const hashedPassword = sha256(password)

    const response = await axios.post('http://127.0.0.1:8080/api/login', {
      username,
      password: hashedPassword,
    })

    const data = response.data

    const setUserInvalidMessage = () => {setPasswordError(t('invalidUserPassword'))}

    if (data?.role?.roleName) setUserRole(data.role.roleName)
    else {
      setUserInvalidMessage()
      return
    }

    if (data?.user?.name) setNameCookie(data.user.name)
    else {
      setUserInvalidMessage()
      return
    }

    if (data?.user?.userName) setUsernameCookie(data.user.userName)
    else {
      setUserInvalidMessage()
      return
    }

    navigate('/home')
  }

  return (
    <CenterBoxWrapper>
      <form>
        <div className="flex-vertical login-form">
          <h2>{t('welcomeAppTitle')}</h2>
          <label>{t('username')}</label>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            value={username}
          />
          <p className="input-error">{usernameError}</p>
          <label>{t('password')}</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
          />
          <p className="input-error">{passwordError}</p>
          <button onClick={handleLogin}>{t('loginButton')}</button>
        </div>
      </form>
    </CenterBoxWrapper>
  )
}

export default LoginPage
