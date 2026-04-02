import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: "text" | "email" | "password";
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ type, label, placeholder, error, id, name, ...props }, ref) => {
    const inputId = id || name || Math.random().toString(36);

    return (
      <div className={styles.root}>
        {label && <label htmlFor={inputId}>{label}</label>}
        <input
          className={`${error ? styles.error : ""}`}
          ref={ref}
          type={type}
          id={inputId}
          name={name}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <span id={`${inputId}-error`} className={styles.errorMessage}>
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
