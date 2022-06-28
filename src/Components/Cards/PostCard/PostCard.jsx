import React from "react";
import classes from "./PostCard.module.scss";

const PostCard = ({
  id,
  body,
  title,
  number_title,
  post_title,
  title_body,
}) => {
  return (
    <div className={classes.post_card} key={id}>
      <p>
        <b>{number_title}</b>
        {id}
      </p>
      <p className={classes.post_body}>
        <b>{post_title}</b>
        {body}
      </p>
      <p className={classes.post_title}>
        <b>{title_body}</b>
        {title}
      </p>
    </div>
  );
};

export default PostCard;
