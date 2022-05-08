import React from "react";
import closeIcon from "../../assets/closePopup.svg";
import classes from "./Popup.module.scss";
import PopupForm from "./PopupForm";

type PropsType = {
  openPopup: () => void;
  togglePopup: boolean;
  popupContent: boolean;
  changePopupContent: () => void;
};

const Popup: React.FC<PropsType> = ({
  togglePopup,
  popupContent,
  openPopup,
  changePopupContent,
}) => {
  return (
    <div className={`${classes.popup} ${togglePopup ? classes.open : ""}`}>
      <div className={classes.popup__body}>
        <div className={`${classes.popup__content}`}>
          <img
            onClick={openPopup}
            className={classes.popup__closeImg}
            src={closeIcon}
            alt=""
          />
          <PopupForm
            popupContent={popupContent}
            changePopupContent={changePopupContent}
          />
        </div>
        <div onClick={openPopup} className={classes.overlay} />
      </div>
    </div>
  );
};

export default Popup;
