import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/profile", component: UserProfile },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/login", exact:true, component: Login },
  { path: "/forgot-password", exact:true, component: ForgetPwd },
  { path: "/register", exact:true, component: Register },
  { path: "/reset-password", exact:true, component: ResetPassword },
]

export { userRoutes, authRoutes }
