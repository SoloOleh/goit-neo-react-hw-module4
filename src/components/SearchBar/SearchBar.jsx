import { useState } from "react";
import { toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(value.trim());
    setValue("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <button type="submit" className={styles.iconWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.icon}
            >
              <path d="M10 2a8 8 0 1 0 5.29 14.29l5 5a1 1 0 0 0 1.42-1.42l-5-5A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 10 4z" />
            </svg>
          </button>
          <input
            name="query"
            type="text"
            placeholder="Search images and photos"
            className={styles.input}
            autoFocus
            autoComplete="off"
            value={value}
            onChange={handleChange}
          />
        </div>
      </form>
    </header>
  );
}
