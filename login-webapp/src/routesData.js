import HomePage from "pages/homePage/HomePage"
import LandingPage from "pages/landingPage/LandingPage"
import LoginPage from "pages/loginPage/LoginPage"
import ManagerDashboard from "pages/managerDashboard/ManagerDashboard"

export const allRoutesStore = {
    landingPage: {
        name: "landingPage",
        path: "/",
        element: <LandingPage />
    },
    loginPage: {
        name: "loginPage",
        path: "/login",
        element: <LoginPage />
    },
    homePage: {
        name: "homePage",
        path: "/home",
        element: <HomePage />
    },
    managerDashboard: {
        name: "managerDashboardPage",
        path: "/manager-dashboard",
        element: <ManagerDashboard />
    }
}

export const nonRestrictedLinks = [allRoutesStore.landingPage,allRoutesStore.loginPage,allRoutesStore.homePage]

export const restrictedLinks = [allRoutesStore.managerDashboard]