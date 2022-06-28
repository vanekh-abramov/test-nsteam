import React from "react";
import classes from "./UserCard.module.scss";

const UserCard = ({
  id,
  selectUser,
  name,
  username,
  email,
  name_title,
  username_title,
  email_title,
}) => {
  return (
    <div
      key={id}
      className={classes.user_card}
      onClick={() => selectUser({ id })}
    >
      <p className={classes.name}>
        <b>{name_title}</b> {name}
      </p>
      <p className={classes.username}>
        <b>{username_title}</b>
        {username}
      </p>
      <p className={classes.email}>
        <b>{email_title}</b> {email}
      </p>
    </div>
  );
};

export default UserCard;
