import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ERROR_ROUTE } from "../../constants/routerLinks";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchNews } from "../../store/reducers/ActionCreators";
import classes from "./News.module.scss";

const News = () => {
  const { data, status, error } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  useEffect(() => {
    // if (error) navigate(ERROR_ROUTE)
    console.log(data);
  });

  return (
    <>
      {status && <p>Loading...</p>}
      {error && <p>Error {error}</p>}
      <div className={classes.news}>
        {data.articles?.map((el) => (
          <>
            <div className={classes.news_card}>
              <p className={classes.author}><b>Author:</b> {el.author || 'None'}</p>
              <p className={classes.content}>{el.content}</p>
              <p className={classes.description}><b>Description:</b> {el.description}</p>
              <p className={classes.publishedAt}><b>Date:</b> {el.publishedAt}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default News;
