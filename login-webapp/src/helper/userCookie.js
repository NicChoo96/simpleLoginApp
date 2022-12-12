import { useCookies } from 'react-cookie'

export const useUserCookie = () => {

  // const [nameCookie, setNameCookie, removeNameCookie] = useCookies(['name']);
  // const [usernameCookie, setUsernameCookie, removeUsernameCookie] = useCookies(['username']);

  const [cookie, setCookie, removeCookie] = useCookies();

  const removeAllCookies = () => {
    removeCookie("name")
    removeCookie("username")
  }

  const setNameCookie = (name) => {
    setCookie("name", name)
  }

  const setUsernameCookie = (username) => {
    setCookie("username", username)
  }

  const nameCookie = cookie?.name || ""
  const usernameCookie = cookie?.username || ""

  return ({ nameCookie, setNameCookie, usernameCookie, setUsernameCookie, removeAllCookies })
}
