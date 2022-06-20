import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PROFILE_ROUTE } from "../../constants/routerLinks";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from "../../store/reducers/ActionCreators";
import classes from "./Friends.module.scss";

const Friends = () => {
  const { data, status, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const selectUser = (id) => {
    navigate(PROFILE_ROUTE + `/:${Object.values(id)}`)
  };

  return (
    <>
      {status && <p>Loading...</p>}
      {error && <p>Error {error}</p>}
      <div className={classes.friends}>
        {data?.map(({ name, username, email, id }) => (
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
        ))}
      </div>
    </>
  );
};

export default Friends;
