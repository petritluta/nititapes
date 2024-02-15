"use client";
import { FieldProps } from "formik";
import style from "./input.module.css";

interface CustomInputProps {
  type: string;
  placeholder: string;
  label: string;
  sublabel: string;
  parentStyle: string;
  errors: string;
  disabled: boolean;
  showErrorText: boolean;
  isTextArea: boolean;
}

const InputComponent: React.FC<FieldProps & CustomInputProps> = ({
  field,
  label,
  sublabel,
  type,
  placeholder,
  parentStyle,
  errors,
  disabled = false,
  showErrorText = true,
  isTextArea = false,
}) => {
  return (
    <div className={`${style.input} ${parentStyle}`}>
      <div className={style.label}>
        {label && <label>{label}</label>}
        <span>{sublabel}</span>
      </div>
      {isTextArea ? (
        <textarea {...field} rows={15}></textarea>
      ) : (
        <input
          {...field}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          className={
            errors?.length > 0 ? style.errorBorder : style.noErrorBorder
          }
        />
      )}

      {showErrorText && errors?.length > 0 ? (
        <span className={style.error}>{errors}</span>
      ) : null}
    </div>
  );
};

export default InputComponent;
