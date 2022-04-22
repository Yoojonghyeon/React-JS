import propTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

//propTypes 을 좀더 편리하게 사용하기 위한 방법
Button.prototype = {
  text: propTypes.string.isRequired,
};

export default Button;
