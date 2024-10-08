import React, { ChangeEvent } from "react";

type InputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  ...rest
}) => {
  return (
    <label className="form-control w-full">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <input
        type={"text"}
        placeholder={placeholder}
        className="input input-bordered w-full"
        value={value}
        onChange={onChange}
        {...rest}
      />
    </label>
  );
};

export default Input;
