import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserId,
  fetchUserPosts,
} from "../../store/reducers/ActionCreators";
import classes from "./Profile.module.scss";
import ProfileCard from "../../Components/Cards/ProfileCard/ProfileCard";
import PostCard from "../../Components/Cards/PostCard/PostCard";

const Profile = () => {
  const params = useParams();
  const { data, status, error } = useSelector((state) => state.userId);
  const { posts, statusPosts, errorPosts } = useSelector(
    (state) => state.userPosts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserId(params.id.slice(1)));
    dispatch(fetchUserPosts(params.id.slice(1)));
  }, [dispatch, params]);

  return (
    <div className={classes.profile}>
      {status && <p>Loading...</p>}
      {error && <p>Error {error}</p>}
      <ProfileCard
        data={data}
        name_title={"Name: "}
        username_title={"Username: "}
        phone_title={"Phone: "}
        email_title={"Email: "}
        website_title={"Website: "}
        city_title={"City: "}
        street_title={"Street: "}
      />
      {statusPosts && <p>Loading...</p>}
      {errorPosts && <p>Error {errorPosts}</p>}
      <div className={classes.posts_wrapper}>
        <b className={classes.post_part}>Posts</b>
        {posts.map(({ title, body, id }) => (
          <PostCard
            key={id}
            title={title}
            body={body}
            id={id}
            number_title={"Number: "}
            post_title={"Post: "}
            title_body={"Title: "}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
