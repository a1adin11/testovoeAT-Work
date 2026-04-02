import React, { type FC } from "react";
import styles from "./Button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButtonProps> = (props) => {
  return (
    <button className={styles.root} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
