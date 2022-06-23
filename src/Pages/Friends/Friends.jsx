import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PROFILE_ROUTE } from "../../constants/routerLinks";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from "../../store/reducers/ActionCreators";
import classes from "./Friends.module.scss";
import UserCard from "../../Components/User/UserCard";

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
          <UserCard name={name} username={username} email={email} id={id} selectUser={selectUser}/>
        ))}
      </div>
    </>
  );
};

export default Friends;
