import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserId, fetchUserPosts } from "../../store/reducers/ActionCreators";
import classes from "./Profile.module.scss";

const Profile = () => {
  const params = useParams();
  const { data, status, error } = useSelector((state) => state.userId);
  const { posts, statusPosts, errorPosts } = useSelector((state) => state.userPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserId(params.id.slice(1)));
    dispatch(fetchUserPosts(params.id.slice(1)));
  }, [dispatch, params]);

  return (
    <div className={classes.profile}>
      {status && <p>Loading...</p>}
      {error && <p>Error {error}</p>}
      <div className={classes.profile_card}>
        <div className={classes.profile_head}>
          <p className={classes.profile_name}>
            <b>Name: </b>
            {data.name}
          </p>
          <p className={classes.profile_username}>
            <b>Username: </b>
            {data.username}
          </p>
          <a className={classes.profile_phone} href={`tel:${data.phone}`}>
            <b>Phone: </b>
            {data.phone}
          </a>
          <a className={classes.profile_email} href={`mailto:${data.email}`}>
            <b>Email: </b>
            {data.email}
          </a>
          <a className={classes.profile_website} href={data.website}>
            <b>Website: </b>
            {data.website}
          </a>
        </div>

        <div className={classes.profile_address}>
          <p className={classes.profile_city}><b>City: </b>{data.address?.city}</p>
          <p className={classes.profile_street}><b>Street: </b>{data.address?.street}</p>
        </div>
      </div>
      {statusPosts && <p>Loading...</p>}
      {errorPosts && <p>Error {errorPosts}</p>}
      <div className={classes.posts_wrapper}>
        <b className={classes.post_part}>Posts</b>
        {posts.map(({title, body, id}) => (
          <div className={classes.post_card} key={id}>
            <p><b>Number: </b>{id}</p>
            <p className={classes.post_body}><b>Post: </b>{body}</p>
            <p className={classes.post_title}><b>Title: </b>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
