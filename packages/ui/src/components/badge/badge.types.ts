import type { HTMLAttributes } from "react";

export type BadgeVariant = "default" | "subtle";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};
