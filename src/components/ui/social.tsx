import * as React from "react";
import { cn } from "@/lib/utils";

interface SocialIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const SocialIcon = React.forwardRef<HTMLAnchorElement, SocialIconProps>(
  ({ className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "w-11 h-11 flex items-center justify-center border border-brand-gray-dark/50 text-white transition-all hover:bg-brand-accent hover:border-brand-accent",
        className
      )}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  )
);
SocialIcon.displayName = "SocialIcon";

export { SocialIcon };
