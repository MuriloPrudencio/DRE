import styles from "../../styles/Input.module.css";

export default function Input({type, text, name, placeholder, value}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>
        {text}
      </label>
      <input
        type={type}
        text={text}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}