import React, { useState, useEffect } from "react";
import { tw } from "~/lib/utils";

interface TextareaProps {
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

  const textareaClasses = tw(
    "min-h-[100px] w-full resize-y rounded-md border bg-white p-3 text-base text-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2",
    error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
    disabled ? "cursor-not-allowed opacity-50" : "",
    className,
  );

  return (
    <div className="relative mb-4">
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        required={required}
        className={textareaClasses}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? "textarea-error" : undefined}
      />
      {error && (
        <p
          id="textarea-error"
          className="absolute -bottom-5 left-0 text-xs text-red-600"
        >
          {error}
        </p>
      )}
      {maxLength && (
        <span className="absolute bottom-2 right-2 text-xs text-gray-500">
          {charCount}/{maxLength}
        </span>
      )}
    </div>
  );
};

export default Textarea;
