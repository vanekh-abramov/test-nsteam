import React from "react";
import classes from "./ProfileCard.module.scss";

const ProfileCard = ({
  data,
  name_title,
  username_title,
  phone_title,
  email_title,
  website_title,
  city_title,
  street_title,
}) => {
  return (
    <div className={classes.profile_card}>
      <div className={classes.profile_head}>
        <p className={classes.profile_name}>
          <b>{name_title}</b>
          {data.name}
        </p>
        <p className={classes.profile_username}>
          <b>{username_title}</b>
          {data.username}
        </p>
        <a className={classes.profile_phone} href={`tel:${data.phone}`}>
          <b>{phone_title}</b>
          {data.phone}
        </a>
        <a className={classes.profile_email} href={`mailto:${data.email}`}>
          <b>{email_title}</b>
          {data.email}
        </a>
        <a className={classes.profile_website} href={data.website}>
          <b>{website_title}</b>
          {data.website}
        </a>
      </div>
      <div className={classes.profile_address}>
        <p className={classes.profile_city}>
          <b>{city_title}</b>
          {data.address?.city}
        </p>
        <p className={classes.profile_street}>
          <b>{street_title}</b>
          {data.address?.street}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
