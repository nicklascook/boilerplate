import React from "react";
import { Input as ShadcnInput } from "~/components/ui/input";

interface CustomInputProps {
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  error?: string;
  className?: string;
  hint?: string;
}

export const CustomInput: React.FC<CustomInputProps> = React.forwardRef<
  HTMLInputElement,
  CustomInputProps
>(
  (
    {
      type = "text",
      placeholder,
      value,
      onChange,
      onBlur,
      onFocus,
      disabled = false,
      required = false,
      name,
      id,
      autoComplete,
      maxLength,
      minLength,
      error,
      className = "",
      hint,
    },
    ref,
  ) => {
    const inputClasses = `${className} ${error ? "border-red-500" : ""}`;

    return (
      <div className="relative mb-4">
        <ShadcnInput
          ref={ref}
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          required={required}
          name={name}
          id={id ?? name}
          autoComplete={autoComplete}
          maxLength={maxLength}
          minLength={minLength}
        />
        {hint && (
          <p className="mt-1 select-none text-xs text-gray-500">{hint}</p>
        )}
        {error && (
          <p className="absolute -bottom-5 left-0 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
