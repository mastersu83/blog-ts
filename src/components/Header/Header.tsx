import React from "react";
import classes from "./Header.module.scss";
import search from "../../assets/search.svg";
import addPost from "../../assets/addPost.svg";
import logOut from "../../assets/logOut.svg";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__title}>VASYA BLOG</div>
      <div className={classes.header__icons}>
        <img
          src={search}
          className={classes.header__icon}
          title="Поиск"
          alt="Поиск"
        />
        <img
          src={addPost}
          className={classes.header__icon}
          title="Написать"
          alt="Написать"
        />
        <img
          src={logOut}
          className={classes.header__icon}
          title="Выход"
          alt="Выход"
        />
      </div>
    </div>
  );
};

export default Header;
