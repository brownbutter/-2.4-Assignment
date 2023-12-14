import styles from "./Button.module.css";

function Button({ label, onClick, customStyles }) {
  // button onClick is the actual event handler
  return (
    <button style={customStyles} onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
}

export default Button;
