import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";
import type { ButtonProps } from "./button.types";
import "./button.css";

const buttonVariants = cva("DSLEVIS-ui-button", {
  variants: {
    variant: {
      default: "DSLEVIS-ui-button--default",
      secondary: "DSLEVIS-ui-button--secondary",
      subtle: "DSLEVIS-ui-button--subtle"
    },
    size: {
      sm: "DSLEVIS-ui-button--sm",
      md: "DSLEVIS-ui-button--md",
      lg: "DSLEVIS-ui-button--lg"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const resolvedProps = asChild ? props : { type: props.type ?? "button", ...props };
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...resolvedProps} />;
}
