import React, { forwardRef } from "react";
import { tw } from "~/lib/utils";

type InputProps = {
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
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
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
    },
    ref,
  ) => {
    const inputClasses = tw(
      "w-full px-3 py-2 text-gray-700 border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2",
      error
        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
      disabled ? "bg-gray-100 cursor-not-allowed opacity-50" : "",
      className,
    );

    return (
      <div className="relative mb-4">
        <input
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
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        {error && (
          <p
            id={`${name}-error`}
            className="absolute -bottom-5 left-0 text-xs text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
