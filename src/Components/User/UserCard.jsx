import React from 'react'
import classes from './UserCard.module.scss'

const UserCard = ({id, selectUser, name, username, email}) => {
  return (
    <div key={id} className={classes.user_card} onClick={() => selectUser({id})}>
    <p className={classes.name}>
      <b>Name:</b> {name}
    </p>
    <p className={classes.username}>
      <b>Username: </b>
      {username}
    </p>
    <p className={classes.email}>
      <b>Email:</b> {email}
    </p>
  </div>
  )
}

export default UserCard