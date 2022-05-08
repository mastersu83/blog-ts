import React from "react";
import classes from "./Menu.module.scss";

type PropsType = {
  openMenu: () => void;
};

const Menu: React.FC<PropsType> = ({ openMenu }) => {
  return (
    <div onClick={openMenu} className={classes.close__menu}>
      <span>МЕНЮ</span>
    </div>
  );
};

export default Menu;
