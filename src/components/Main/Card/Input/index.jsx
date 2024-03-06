import styles from "./index.module.scss";

const Input = ({ value, onChange }) => {
  return (
    <div className={styles.input}>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className={styles.input__checkbox}
      />
    </div>
  );
};

export default Input;
