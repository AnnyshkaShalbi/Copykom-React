import React from "react";

interface CommentProps {
  value?: string;
  label?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  rows?: number;
  required?: boolean;
  id?: string;
}

const Comment = ({
  label,
  placeholder,
  onChange,
  error,
  disabled = false,
  className = "",
  value = "",
  rows = 10,
  required = false,
  id,
  ...props
}: CommentProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label 
          htmlFor={id}
          className={`mb-2 text-sm text-gray`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={id}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        rows={rows}
        className={`p-5 border outline-none resize-none min-h-40 ${
          error ? "border-red-500" : "border-[#BEC7E2]"
        } ${
          error ? "focus:ring-red-500" : "focus:[#BEC7E2]"
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
        required={required}
        {...props}
      />
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Comment;