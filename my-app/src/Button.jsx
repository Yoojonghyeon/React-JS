import propTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

//propTypes 타입 검사 => 좀더 편리하게 prop을 사용하기 위한 방법
Button.prototype = {
  text: propTypes.string.isRequired,
};

export default Button;
