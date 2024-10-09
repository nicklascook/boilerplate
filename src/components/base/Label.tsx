import React from "react";

type Props = {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
};

export const Label: React.FC<Props> = ({
  htmlFor,
  children,
  className = "",
  required = false,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block pb-1 text-sm font-medium text-gray-700 ${className}`}
    >
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
};

export default Label;
