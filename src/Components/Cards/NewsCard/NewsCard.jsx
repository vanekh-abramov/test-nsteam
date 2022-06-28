import React from "react";
import classes from "./NewsCard.module.scss";

const NewsCard = ({ id, title, body, author_title, description_title }) => {
  return (
    <div className={classes.news_card} key={id}>
      <p className={classes.author}>
        <b>{author_title}</b> {id}
      </p>
      <p className={classes.content}>{body}</p>
      <p className={classes.description}>
        <b>{description_title}</b> {title}
      </p>
    </div>
  );
};

export default NewsCard;
