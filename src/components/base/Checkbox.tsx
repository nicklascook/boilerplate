import React from "react";
import { Checkbox as ShadcnCheckbox } from "~/components/ui/checkbox";
import { tw } from "~/lib/utils";

interface CustomCheckboxProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  label: string;
  error?: string;
  className?: string;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onCheckedChange,
  disabled = false,
  required = false,
  name,
  id,
  label,
  error,
  className = "",
}) => {
  return (
    <div className="flex items-center space-x-2">
      <label
        className={tw(
          "flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          error && "text-red-500",
        )}
      >
        <ShadcnCheckbox
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          required={required}
          name={name}
          id={id ?? name}
          className={`${className} ${error ? "border-red-500" : ""}`}
        />

        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default CustomCheckbox;
