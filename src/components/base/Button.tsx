import { motion } from "framer-motion";
import { tw } from "~/lib/utils";
import React, { forwardRef } from "react";

type ButtonVariant = "default" | "outline" | "ghost" | "error";

const buttonVariants: Record<ButtonVariant, string> = {
  default: "bg-primary-500 text-white",
  outline:
    "border border-gray-400 bg-white text-gray-600 hover:border-primary-500 hover:text-primary-500",
  error: "bg-red-500 text-white",
  ghost: "text-gray-800",
};

type Props = {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: "small" | "medium" | "large";
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      onClick,
      children,
      className,
      label,
      disabled = false,
      variant = "default",
      size = "medium",
      ...props
    },
    ref,
  ) => {
    return (
      <motion.button
        ref={ref}
        type="button"
        className={tw(
          "flex items-center justify-center gap-1.5 rounded-base px-4 py-2 font-semibold text-white transition-colors",
          buttonVariants[variant],
          disabled && "cursor-not-allowed opacity-50",
          size === "small" && "text-sm",
          size === "medium" && "text-[0.95rem]",
          size === "large" && "text-lg",
          className,
        )}
        onClick={onClick}
        disabled={disabled}
        whileHover={!disabled ? { scale: 1.02 } : undefined}
        whileTap={!disabled ? { scale: 0.97 } : undefined}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        {...props}
      >
        {label}
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
