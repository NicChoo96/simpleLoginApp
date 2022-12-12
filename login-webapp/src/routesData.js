import HomePage from "pages/homePage/HomePage"
import LandingPage from "pages/landingPage/LandingPage"
import LoginPage from "pages/loginPage/LoginPage"
import ManagerDashboard from "pages/managerDashboard/ManagerDashboard"

export const allRoutesStore = {
    landingPage: {
        name: "Landing Page",
        path: "/",
        element: <LandingPage />
    },
    loginPage: {
        name: "Login",
        path: "/login",
        element: <LoginPage />
    },
    homePage: {
        name: "Home",
        path: "/home",
        element: <HomePage />
    },
    managerDashboard: {
        name: "Manager Dashboard",
        path: "/manager-dashboard",
        element: <ManagerDashboard />
    }
}

export const nonRestrictedLinks = [allRoutesStore.landingPage,allRoutesStore.loginPage,allRoutesStore.homePage]

export const restrictedLinks = [allRoutesStore.managerDashboard]