import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import type { BadgeProps } from "./badge.types";
import "./badge.css";

const badgeVariants = cva("DSLEVIS-ui-badge", {
  variants: {
    variant: {
      default: "DSLEVIS-ui-badge--default",
      subtle: "DSLEVIS-ui-badge--subtle"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
