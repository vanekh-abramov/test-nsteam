import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../Components/Cards/NewsCard/NewsCard";
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
        {data?.map(({ id, body, title }) => (
          <NewsCard
            key={id}
            id={id}
            body={body}
            title={title}
            author_title={"Author: "}
            description_title={"Description: "}
          />
        ))}
      </div>
    </>
  );
};

export default News;
