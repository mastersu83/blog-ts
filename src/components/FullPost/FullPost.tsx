import React from "react";
import classes from "./FuulPost.module.scss";
import view from "../../assets/view.svg";
import Button from "../../common/Button";

const FullPost = () => {
  return (
    <div className={classes.full__post}>
      <div className={classes.full__postTitleBox}>
        <div className={classes.full__postTitleWrapper}>
          <div className={classes.full__postDate}>
            <div className={classes.full__date}>12 августа 2019 в 08:06</div>
            <div className={classes.full__view}>
              <img className={classes.full__viewIcon} src={view} alt="" />
              <div className={classes.full__viewCount}>55</div>
            </div>
          </div>
          <div className={classes.full__postTitle}>
            Какой-то очень интересный заголовок
          </div>
          <div className={classes.full__postDesc}>
            Я часто замечаю, что начинающие фронтенд-разработчики по несколько
            раз то начинают, то забрасывают изучение технологий. Я часто
            замечаю, что начинающие фронтенд-разработчики по несколько раз то
            начинают, то забрасывают изучение технологий. Я часто замечаю, что
            начинающие фронтенд-разработчики по несколько раз то начинают, то
            забрасывают изучение технологий. Я часто замечаю, что начинающие
            фронтенд-разработчики по несколько раз то начинают, то забрасывают
            изучение технологий. Я часто замечаю, что начинающие
            фронтенд-разработчики по несколько раз то начинают, то забрасывают
            изучение технологий. Я часто замечаю, что начинающие
            фронтенд-разработчики по несколько раз то начинают, то забрасывают
            изучение технологий.
          </div>
        </div>
      </div>
      <div className={classes.full__postContainer}>
        <div className={classes.full__postText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
          fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
          scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis
          quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
          nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
          laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet phasellus
          malesuada non nisi.
        </div>
        <div className={classes.full__comments}>Комментарии (3)</div>
        <div className={classes.full__postComments}>
          <div className={classes.full__postComment}>
            <div className={classes.full__postCommentHeader}>
              <div className={classes.full__postCommentName}>Vasya Pupkin</div>
              <div className={classes.full__postCommentDate}>
                12 августа 2019 в 08:06
              </div>
            </div>
            <div className={classes.full__postCommentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              adipiscing leo id sed neque, diam nibh.
            </div>
          </div>
          <div className={classes.full__postComment}>
            <div className={classes.full__postCommentHeader}>
              <div className={classes.full__postCommentName}>Vasya Pupkin</div>
              <div className={classes.full__postCommentDate}>
                12 августа 2019 в 08:06
              </div>
            </div>
            <div className={classes.full__postCommentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              adipiscing leo id sed neque, diam nibh.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Porttitor adipiscing leo id sed
              neque, diam nibh.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Porttitor adipiscing leo id sed neque, diam nibh.
            </div>
          </div>
        </div>
        <div className={classes.full__postAddComment}>
          <div className={classes.full__addCommentTitle}>
            Добавить комментарий
          </div>
          <textarea className={classes.full__addCommentInput} />
          <div className={classes.full__addCommentBtn}>
            <Button text="Отправить" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPost;
