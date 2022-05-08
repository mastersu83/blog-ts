import React, { useState } from "react";
import classes from "./Main.module.scss";
import About from "../About/About";
import Posts from "../Posts/Posts";
import Menu from "../Menu/Menu";
import FullPost from "../FullPost/FullPost";
import CreatePost from "../CreatePost/CreatePost";
import Profile from "../Profile/Profile";
import { Route, Routes, useLocation } from "react-router-dom";
import RightMenu from "../RightMenu/RightMenu";
import Popup from "../Popup/Popup";
import Header from "../Header/Header";

const Main = () => {
  const { pathname } = useLocation();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [togglePopup, setTogglePopup] = useState<boolean>(false);
  const [popupContent, setPopupContent] = useState<boolean>(false);

  const openMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const openPopup = () => {
    setTogglePopup(!togglePopup);
  };
  const changePopupContent = () => {
    setPopupContent(!popupContent);
  };

  return (
    <div className={classes.root}>
      <Header openPopup={openPopup} popupContent={popupContent} />
      <div
        className={`${classes.main} ${!toggleMenu ? "" : classes.main__move}`}
      >
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="*" element={<div>Not Found</div>} />
          <Route path="/full-post" element={<FullPost />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {pathname !== "/profile" && <Posts />}
        <Menu openMenu={openMenu} />
        <RightMenu openMenu={openMenu} toggleMenu={toggleMenu} />
        <Popup
          openPopup={openPopup}
          changePopupContent={changePopupContent}
          togglePopup={togglePopup}
          popupContent={popupContent}
        />
      </div>
    </div>
  );
};

export default Main;
