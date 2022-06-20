import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from "../../store/reducers/ActionCreators";
import classes from "./News.module.scss";

const News = () => {
  const { data, status, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      {status && <p>Loading...</p>}
      {error && <p>Error {error}</p>}
      <div className={classes.news}>
        {data?.articles?.map(
          ({ author, content, description, publishedAt }) => (
            <div className={classes.news_card}>
              <p className={classes.author}>
                <b>Author:</b> {author || "None"}
              </p>
              <p className={classes.content}>{content}</p>
              <p className={classes.description}>
                <b>Description:</b> {description}
              </p>
              <p className={classes.publishedAt}>
                <b>Date:</b> {publishedAt}
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default News;
