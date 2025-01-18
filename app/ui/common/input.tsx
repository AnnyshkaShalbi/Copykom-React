import React from "react";

interface InputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

const Input = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-2 text-sm text-gray after:content-['*'] after:text-red-500 after:pl-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`p-5 border outline-none ${
          error ? "border-red-500" : "border-[#BEC7E2]"
        } ${
          error ? "focus:ring-red-500" : "focus:[#BEC7E2]"
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
        {...props}
      />
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Input;