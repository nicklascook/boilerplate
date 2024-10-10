import React from "react";
import { Switch as ShadcnSwitch } from "~/components/ui/switch";

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  label: string;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onCheckedChange,
  disabled = false,
  label,
  className,
}) => {
  return (
    <div className="inline-block">
      <label className="flex select-none items-center gap-2 space-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        <ShadcnSwitch
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          className={className}
        />
        {label}
      </label>
    </div>
  );
};

export default Switch;
