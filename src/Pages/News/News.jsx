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
        {data?.map(
          ({ id, body, title }) => (
            <div className={classes.news_card}>
              <p className={classes.author}>
                <b>Number:</b> {id}
              </p>
              <p className={classes.content}>{body}</p>
              <p className={classes.description}>
                <b>Description:</b> {title}
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default News;
