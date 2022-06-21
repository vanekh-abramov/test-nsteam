import React from 'react'
import { NavLink } from 'react-router-dom'
import AppRouter from './Components/AppRouter'
import { FRIENDS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NEWS_ROUTE, PROFILE_ROUTE } from './constants/routerLinks'
import classes from './App.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { authLogin } from './store/reducers/LoginSlice'

const App = () => {
  let { userLogin } = useSelector((state) => state.chekLogin);
  const dispatch = useDispatch()

  const authLogout = () => {
    dispatch(authLogin(false));
  }

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <h1 className={classes.logo}>LoGo</h1>
        {userLogin && (
          <button onClick={authLogout}>Logout</button>
        )}
        {!userLogin && (
          <NavLink to={LOGIN_ROUTE}>Login</NavLink>
        )}
      </header>
      <section className={classes.section}>
        <div className={classes.nav_bar}>
          <NavLink className={classes.link} to={HOME_ROUTE}>Home</NavLink>
          <NavLink className={classes.link} to={userLogin ? PROFILE_ROUTE + '/:1' : LOGIN_ROUTE}>Profile</NavLink>
          <NavLink className={classes.link} to={userLogin ? FRIENDS_ROUTE : LOGIN_ROUTE}>Friends</NavLink>
          <NavLink className={classes.link} to={NEWS_ROUTE}>News</NavLink>
        </div>
        <div className={classes.content}>
          <AppRouter />
        </div>
      </section>
    </div>
  )
}

export default App