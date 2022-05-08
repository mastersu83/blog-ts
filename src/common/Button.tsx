import React from "react";
import classes from "./Button.module.scss";

const Button = ({ text }: { text: string }) => {
  return <button className={classes.blue__button}>{text}</button>;
};

export default Button;
