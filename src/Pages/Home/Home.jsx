import React from "react";
import classes from "./Home.module.scss";

const Home = () => {
  return (
    <div className={classes.home}>
      <img
        className={classes.image}
        src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
        alt="img"
      />
      <h3 className={classes.caption}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas id
        hic laborum, quisquam inventore autem! Fugiat aspernatur harum, nesciunt
        temporibus natus quam nostrum mollitia cupiditate. Error debitis
        voluptatum hic saepe!
      </h3>
    </div>
  );
};

export default Home;
