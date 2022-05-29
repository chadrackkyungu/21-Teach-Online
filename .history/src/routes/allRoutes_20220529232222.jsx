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
import Tutor from '../pages/Tutors/tutor'
import Learners from '../pages/Learners/learners'
import TutorLessons from '../pages/Tutors/Tutor-Lessons';
import JoinedLessons from '../pages/Tutors/Joined-Lessons';
import CreateLessons from '../pages/Tutors/Create-new-lessons';

const userRoutes = [
  { path: "/dashboard", exact:true, component: Dashboard },
  { path: "/profile", exact:true,  component: UserProfile },
  { path: "/tutor-dashboard", exact:true,  component: Tutor },
  { path: "/learner", exact:true,  component: Learners },
  { path: "/tutor-lessons", exact:true,  component: TutorLessons },
  { path: "/joined-lessons", exact:true,  component: JoinedLessons },
  { path: "/create-lesson", exact:true,  component: CreateLessons },

  //if the user try to route to a page that does not exist redirect him back here
  { path: "*", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/login", exact:true, component: Login },
  { path: "/forgot-password", exact:true, component: ForgetPwd },
  { path: "/register", exact:true, component: Register },
  { path: "/reset-password", exact:true, component: ResetPassword },
]

export { userRoutes, authRoutes }
