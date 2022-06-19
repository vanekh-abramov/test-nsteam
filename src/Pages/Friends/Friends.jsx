import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUsers } from "../../store/reducers/ActionCreators";
import classes from "./Friends.module.scss";

const Friends = () => {
  const { data, status, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {status && <p>Loading...</p>}
      {error && <p>Error {error}</p>}
      <div className={classes.friends}>
        {data?.map(({ name, username, email }) => (
          <div className={classes.user_card}>
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
        ))}
      </div>
    </>
  );
};

export default Friends;
