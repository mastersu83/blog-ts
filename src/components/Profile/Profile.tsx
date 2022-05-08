import React from "react";
import classes from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__container}>
        <div className={classes.profile__name}>Вася Пупкин</div>
        <div className={classes.profile__dateRegister}>
          Дата регистрации: <span>12 августа 2019 в 08:06</span>
        </div>
        <div className={classes.profile__buttons}>
          <button className={`${classes.profile__btn} ${classes.active}`}>
            Статьи
          </button>
          <button className={classes.profile__btn}>Комментарии</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
