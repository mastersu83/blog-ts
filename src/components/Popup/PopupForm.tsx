import React from "react";
import classes from "./Popup.module.scss";
import Button from "../../common/Button";

type PropsType = {
  popupContent: boolean;
  changePopupContent: () => void;
};

const PopupForm: React.FC<PropsType> = ({
  popupContent,
  changePopupContent,
}) => {
  return (
    <div className={classes.popup__inner}>
      <div className={classes.popup__formEdit}>
        <div className={classes.popup__title}>
          {popupContent ? "Регистрация" : "Вход"}
        </div>
        {popupContent && (
          <>
            <div>Имя и Фамилия</div>
            <input
              name="fullName"
              className={classes.popup__input}
              type="text"
              placeholder="Введите Имя и Фамилию..."
              required
            />
          </>
        )}
        <div>Email</div>
        <input
          name="email"
          className={classes.popup__input}
          type="text"
          placeholder="Введите Email..."
          required
        />
        <div>Пароль</div>
        <input
          name="password"
          className={classes.popup__input}
          type="password"
          placeholder="Введите пароль..."
          required
        />
        <div className={`${classes.popup__submit}`}>
          <Button text={popupContent ? "Зарегистрироваться" : "Войти"} />
        </div>
      </div>
      <div>
        <span onClick={changePopupContent} className={classes.popup__link}>
          {popupContent ? (
            <div>
              Есть аккаунт? <span>Войдите</span>
            </div>
          ) : (
            <div>
              Нет аккаунта? <span>Зарегистрируйтесь</span>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default PopupForm;
