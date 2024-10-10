import React from "react";
import { Textarea as ShadcnTextarea } from "~/components/ui/textarea";

interface CustomTextareaProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  className?: string;
}

export const CustomTextarea: React.FC<CustomTextareaProps> = ({
  value,
  onChange,
  placeholder,
  maxLength,
  disabled = false,
  required = false,
  error,
  className = "",
}) => {
  const charCount = value?.length ?? 0;

  return (
    <div className="relative mb-4">
      <ShadcnTextarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        required={required}
        className={`${className} ${error ? "border-red-500" : ""}`}
      />
      {error && (
        <p className="absolute -bottom-5 left-0 text-xs text-red-600">
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

export default CustomTextarea;
