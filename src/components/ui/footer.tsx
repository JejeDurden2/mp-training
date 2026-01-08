import * as React from "react";
import { cn } from "@/lib/utils";

const Footer = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn(
      "py-8 px-4 bg-black border-t border-brand-gray-dark/30",
      className
    )}
    role="contentinfo"
    {...props}
  />
));
Footer.displayName = "Footer";

const FooterContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-light text-brand-gray-dark",
      className
    )}
    {...props}
  />
));
FooterContent.displayName = "FooterContent";

const FooterNav = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn("flex gap-6", className)}
    aria-label="Liens légaux"
    {...props}
  />
));
FooterNav.displayName = "FooterNav";

const FooterLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "text-brand-gray-dark hover:opacity-70 transition-opacity",
      className
    )}
    rel="nofollow"
    {...props}
  />
));
FooterLink.displayName = "FooterLink";

export { Footer, FooterContent, FooterNav, FooterLink };
