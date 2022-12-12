import { RoleContext } from 'context/RoleContext'
import { useUserCookie } from 'helper/userCookie'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import './LogOutButton.css'

const LogOutButton = ()=> {

    const {removeAllCookies} = useUserCookie()
    const {removeRole} = useContext(RoleContext)
    const navigate = useNavigate()
    const {t} = useTranslation()

    const handleLogout = ()=> {
        removeAllCookies()
        removeRole()
        navigate('/')
    }

    return(
        <button className='log-out-btn' onClick={handleLogout}>{t('logoutButton')}</button>
    )
}

export default LogOutButton