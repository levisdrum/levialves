import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "default" | "secondary" | "subtle";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
};
