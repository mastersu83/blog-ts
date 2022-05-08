import React from "react";
import classes from "./Header.module.scss";
import search from "../../assets/search.svg";
import addPost from "../../assets/addPost.svg";
import logOut from "../../assets/logOut.svg";
import logIn from "../../assets/logIn.svg";
import { Link } from "react-router-dom";

type PropsType = {
  openPopup: () => void;
  popupContent: boolean;
};

const Header: React.FC<PropsType> = ({ openPopup, popupContent }) => {
  return (
    <div className={classes.header}>
      <Link to="/">
        <div className={classes.header__title}>VASYA BLOG</div>
      </Link>
      <div className={classes.header__icons}>
        <Link to="full-post">
          <img
            src={search}
            className={classes.header__icon}
            title="Поиск"
            alt="Поиск"
          />
        </Link>

        <Link to="/create-post">
          <img
            src={addPost}
            className={classes.header__icon}
            title="Написать"
            alt="Написать"
          />
        </Link>
        <img
          onClick={openPopup}
          src={popupContent ? logIn : logOut}
          className={classes.header__icon}
          title="Выход"
          alt="Выход"
        />
      </div>
    </div>
  );
};

export default Header;
