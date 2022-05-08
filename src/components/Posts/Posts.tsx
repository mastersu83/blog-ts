import React from "react";
import classes from "./Posts.module.scss";

import view from "../../assets/view.svg";
import postImg from "../../assets/post-img.jpg";

const Posts = () => {
  return (
    <div className={classes.posts}>
      <div className={classes.posts__list}>
        <div className={`${classes.posts__item} ${classes.active__post}`}>
          <div className={classes.posts__itemPost}>
            <div className={classes.posts__itemTitle}>
              Какой-то очень интересный заголовок
            </div>
            <div className={classes.posts__itemText}>
              На работе потребовалось запилить задачу для автоматического
              определения города при совершении заказа.
            </div>
            <div className={classes.posts__itemDate}>
              <div className={classes.posts__date}>12 августа 2019 в 08:06</div>
              <div className={classes.posts__view}>
                <img className={classes.posts__viewIcon} src={view} alt="" />
                <span className={classes.posts__viewCount}>301</span>
              </div>
            </div>
          </div>
          <img src={postImg} alt="" className={classes.posts__itemImg} />
        </div>
        <div className={`${classes.posts__item}`}>
          <div className={classes.posts__itemPost}>
            <div className={classes.posts__itemTitle}>
              JavaScript: Как с помощью Data определить город по IP?
            </div>
            <div className={classes.posts__itemText}>
              На работе потребовалось запилить задачу для автоматического
              определения города при совершении заказа. Было решено сделать это
              на фронте, ибо бек был занят.
            </div>
            <div className={classes.posts__itemDate}>
              <div className={classes.posts__date}>12 августа 2019 в 08:06</div>
              <div className={classes.posts__view}>
                <img className={classes.posts__viewIcon} src={view} alt="" />
                <span className={classes.posts__viewCount}>301</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.posts__item} ${classes.active__post}`}>
          <div className={classes.posts__itemPost}>
            <div className={classes.posts__itemTitle}>
              Какой-то очень интересный заголовок
            </div>
            <div className={classes.posts__itemText}>
              На работе потребовалось запилить задачу для автоматического
              определения города при совершении заказа.
            </div>
            <div className={classes.posts__itemDate}>
              <div className={classes.posts__date}>12 августа 2019 в 08:06</div>
              <div className={classes.posts__view}>
                <img className={classes.posts__viewIcon} src={view} alt="" />
                <span className={classes.posts__viewCount}>301</span>
              </div>
            </div>
          </div>
          <img src={postImg} alt="" className={classes.posts__itemImg} />
        </div>
        <div className={`${classes.posts__item}`}>
          <div className={classes.posts__itemPost}>
            <div className={classes.posts__itemTitle}>
              JavaScript: Как с помощью Data определить город по IP?
            </div>
            <div className={classes.posts__itemText}>
              На работе потребовалось запилить задачу для автоматического
              определения города при совершении заказа. Было решено сделать это
              на фронте, ибо бек был занят.
            </div>
            <div className={classes.posts__itemDate}>
              <div className={classes.posts__date}>12 августа 2019 в 08:06</div>
              <div className={classes.posts__view}>
                <img className={classes.posts__viewIcon} src={view} alt="" />
                <span className={classes.posts__viewCount}>301</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
