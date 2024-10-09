import React, { useState, useEffect } from "react";

interface TextareaProps {
  label?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  value = "",
  onChange,
  placeholder,
  maxLength,
  disabled = false,
  required = false,
  className = "",
}) => {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setCharCount(newValue.length);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="mb-4 flex flex-col">
      {label && (
        <label className="mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        required={required}
        className={`min-h-[100px] resize-y rounded-md border bg-white p-3 text-base text-gray-900 transition-colors duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        } ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`}
      />
      {error && <span className="mt-1 text-xs text-red-600">{error}</span>}
      {maxLength && (
        <span className="mt-1 self-end text-xs text-gray-500">
          {charCount}/{maxLength}
        </span>
      )}
    </div>
  );
};

export default Textarea;
