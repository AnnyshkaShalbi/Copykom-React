import React from "react";

interface CommentProps {
  type?: string;
  label?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

const Comment = ({
  type = "text",
  label,
  placeholder,
  onChange,
  error,
  disabled = false,
  className = "",
  ...props
}: CommentProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-2 text-sm text-gray after:content-['*'] after:text-red-500 after:pl-1">
          {label}
        </label>
      )}
      <textarea
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={`p-5 border outline-none resize-none min-h-40 ${
          error ? "border-red-500" : "border-[#BEC7E2]"
        } ${
          error ? "focus:ring-red-500" : "focus:[#BEC7E2]"
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
        {...props}
      ></textarea>
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Comment;