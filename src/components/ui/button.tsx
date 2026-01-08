import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-audiowide text-sm tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-2 border-white bg-transparent text-white hover:bg-brand-accent hover:border-brand-accent",
        accent:
          "border-2 border-brand-accent bg-brand-accent text-white hover:bg-transparent hover:text-brand-accent",
        ghost:
          "text-white hover:opacity-70",
        link:
          "text-white underline-offset-4 hover:underline hover:opacity-70",
      },
      size: {
        default: "px-10 py-4",
        sm: "px-6 py-2 border",
        lg: "px-12 py-5 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <a
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonLink.displayName = "ButtonLink";

export { Button, ButtonLink, buttonVariants };
