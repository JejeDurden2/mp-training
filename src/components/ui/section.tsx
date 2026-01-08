import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "black" | "dark";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "black", ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "py-24 px-4 sm:px-6",
        variant === "black" && "bg-black",
        variant === "dark" && "bg-brand-dark",
        className
      )}
      {...props}
    />
  )
);
Section.displayName = "Section";

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-center mb-16", className)}
    {...props}
  />
));
SectionHeader.displayName = "SectionHeader";

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "font-audiowide text-2xl lg:text-[2.5rem] tracking-wider text-white mb-6 text-center",
      className
    )}
    {...props}
  />
));
SectionTitle.displayName = "SectionTitle";

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-lg max-w-2xl mx-auto font-light text-brand-gray-light",
      className
    )}
    {...props}
  />
));
SectionDescription.displayName = "SectionDescription";

interface NeonLineProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "accent" | "white";
}

const NeonLine = React.forwardRef<HTMLDivElement, NeonLineProps>(
  ({ className, variant = "accent", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-16 h-px mx-auto",
        variant === "accent" && "bg-brand-accent shadow-[0_0_8px_var(--color-brand-accent),0_0_16px_var(--color-brand-accent),0_0_32px_rgba(0,128,255,0.5)]",
        variant === "white" && "bg-white",
        className
      )}
      {...props}
    />
  )
);
NeonLine.displayName = "NeonLine";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full max-w-6xl mx-auto px-4", className)}
    {...props}
  />
));
Container.displayName = "Container";

export { Section, SectionHeader, SectionTitle, SectionDescription, NeonLine, Container };
