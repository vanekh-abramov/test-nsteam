import React from 'react'
import { NavLink } from 'react-router-dom'
import AppRouter from './Components/AppRouter'
import { FRIENDS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NEWS_ROUTE, PROFILE_ROUTE } from './constants/routerLinks'
import classes from './App.module.scss'
const App = () => {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <h1 className={classes.logo}>LoGo</h1>
        <button>
          <NavLink to={LOGIN_ROUTE}>Login</NavLink>
        </button>
      </header>
      <section className={classes.section}>
        <div className={classes.nav_bar}>
          <NavLink className={classes.link} to={HOME_ROUTE}>Home</NavLink>
          <NavLink className={classes.link} to={PROFILE_ROUTE + '/:1'}>Profile</NavLink>
          <NavLink className={classes.link} to={FRIENDS_ROUTE}>Friends</NavLink>
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