import { HOME_ROUTE, FRIENDS_ROUTE, LOGIN_ROUTE, NEWS_ROUTE, PROFILE_ROUTE } from './constants/routerLinks'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Friends from './Pages/Friends/Friends'
import News from './Pages/News/News'
import Profile from './Pages/Profile/Profile'

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: PROFILE_ROUTE + '/:id',
    Component: Profile
  },
  {
    path: FRIENDS_ROUTE,
    Component: Friends
  },
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: NEWS_ROUTE,
    Component: News
  }
]