import React from "react";
import classes from "./CreatePost.module.scss";
import Button from "../../common/Button";

const CreatePost = () => {
  return (
    <div className={classes.create__post}>
      <input
        className={classes.create__titleInput}
        placeholder="Введите заголовок..."
        type="text"
      />
      <div className={classes.create__shortDesc}>Короткое описание:</div>
      <textarea className={classes.create__shortInput} />
      <div className={classes.create__linkTitle}>Ссылка на изображение:</div>
      <div className={classes.create__link}>
        <input className={classes.create__linkInput} type="text" />
        <button className={classes.create__linkBtn}>Загрузить</button>
      </div>
      <div className={classes.create__longDesc}>Полное описание:</div>
      <textarea className={classes.create__longInput} />
      <div className={classes.create__btn}>
        <Button text="Создать" />
      </div>
    </div>
  );
};

export default CreatePost;
