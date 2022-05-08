import React from "react";
import classes from "./Button.module.scss";

type PropsType = {
  openMenu: () => void;
};

const CloseRightMenu: React.FC<PropsType> = ({ openMenu }) => {
  return (
    <div onClick={openMenu} className={classes.close__button}>
      Закрыть
    </div>
  );
};

export default CloseRightMenu;
