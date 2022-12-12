import { RoleContext } from 'context/RoleContext'
import { useUserCookie } from 'helper/userCookie'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './LogOutButton.css'

const LogOutButton = ()=> {

    const {removeAllCookies} = useUserCookie()
    const {removeRole} = useContext(RoleContext)
    const navigate = useNavigate()

    const handleLogout = ()=> {
        removeAllCookies()
        removeRole()
        navigate('/')
    }

    return(
        <button className='log-out-btn' onClick={handleLogout}>Log Out</button>
    )
}

export default LogOutButton