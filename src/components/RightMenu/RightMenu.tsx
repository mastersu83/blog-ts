import React from "react";
import classes from "./RightMenu.module.scss";
import CloseRightMenu from "../../common/CloseRightMenu";

type PropsType = {
  toggleMenu: boolean;
  openMenu: () => void;
};

const RightMenu: React.FC<PropsType> = ({ toggleMenu, openMenu }) => {
  return (
    <div
      className={`${classes.menu} ${classes.open} ${
        toggleMenu ? "" : classes.hide__menu
      } `}
    >
      <div className={classes.menu__top}>
        <CloseRightMenu openMenu={openMenu} />
        <div className={classes.menu__name}>Вася Пупкин</div>
        <div className={classes.menu__date}>
          Дата регистрации: 12 августа 2019 в 08:06
        </div>
      </div>
      <div className={classes.menu__navbar}>
        <div className={classes.menu__link}>Главная</div>
        <div className={classes.menu__link}>Мой профиль</div>
        <div className={classes.menu__link}>Создать запись</div>
        <div className={classes.menu__link}>Выйти</div>
      </div>
    </div>
  );
};

export default RightMenu;
