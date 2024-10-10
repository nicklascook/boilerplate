import React from "react";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioProps {
  options: RadioOption[];
  value: string;
  onValueChange: (value: string) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  options,
  value,
  onValueChange,
  name,
  disabled = false,
  className,
}) => {
  return (
    <RadioGroup
      value={value}
      onValueChange={onValueChange}
      name={name}
      className={className}
      disabled={disabled}
    >
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <label
            htmlFor={option.value}
            className="select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default Radio;
