import axios from 'axios'
import { useContext, useState } from 'react'
import './LoginPage.css'
import { sha256 } from 'js-sha256'
import { useUserCookie } from '../../helper/userCookie'
import { useNavigate } from 'react-router-dom'
import { RoleContext } from 'context/RoleContext'
import CenterBoxWrapper from 'components/centerBox/CenterBoxWrapper'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const { setNameCookie, setUsernameCookie } = useUserCookie()

  const { setUserRole } = useContext(RoleContext)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    let usernameErrorMessage = ''
    let passwordErrorMessage = ''

    // Validation
    if (username === '') usernameErrorMessage = 'Username is required'
    if (password === '') passwordErrorMessage = 'Password is required'

    if (
      password.length > 1 &&
      !password.match(
        /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{4,}$/,
      )
    ) {
      passwordErrorMessage =
        'Minimum of 4 characters, at least one lowercase letter, one number and one special character'
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

    const setUserInvalidMessage = () => {setPasswordError('Invalid userid or password')}

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
          <h2>Welcome to the App</h2>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            value={username}
          />
          <p className="input-error">{usernameError}</p>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
          />
          <p className="input-error">{passwordError}</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </CenterBoxWrapper>
  )
}

export default LoginPage
