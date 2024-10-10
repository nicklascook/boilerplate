import React from "react";
import {
  Popover as ShadcnPopover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  align = "center",
  side = "bottom",
  sideOffset = 4,
  className,
}) => {
  return (
    <ShadcnPopover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align={align}
        side={side}
        sideOffset={sideOffset}
        className={className}
      >
        {content}
      </PopoverContent>
    </ShadcnPopover>
  );
};

export default Popover;
