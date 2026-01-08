import * as React from "react";
import { cn } from "@/lib/utils";

const Hero = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      "relative min-h-screen flex items-center justify-center pt-16",
      className
    )}
    {...props}
  >
    {children}
  </header>
));
Hero.displayName = "Hero";

const HeroBackground = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn(
      "absolute inset-0 w-full h-full object-cover",
      className
    )}
    {...props}
  />
));
HeroBackground.displayName = "HeroBackground";

const HeroOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black",
      className
    )}
    {...props}
  />
));
HeroOverlay.displayName = "HeroOverlay";

const HeroContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative z-20 text-center px-4 py-12 max-w-4xl mx-auto",
      className
    )}
    {...props}
  />
));
HeroContent.displayName = "HeroContent";

const HeroTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("sr-only", className)}
    {...props}
  />
));
HeroTitle.displayName = "HeroTitle";

const HeroSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "font-audiowide text-2xl tracking-wider text-white mb-4",
      className
    )}
    role="doc-subtitle"
    {...props}
  />
));
HeroSubtitle.displayName = "HeroSubtitle";

const HeroDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "font-inter font-light text-lg text-brand-gray-light max-w-2xl mx-auto",
      className
    )}
    {...props}
  />
));
HeroDescription.displayName = "HeroDescription";

const HeroLogo = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn(
      "h-40 lg:h-48 w-auto mx-auto mb-6 block",
      className
    )}
    {...props}
  />
));
HeroLogo.displayName = "HeroLogo";

interface HeroScrollIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroScrollIndicator = React.forwardRef<HTMLDivElement, HeroScrollIndicatorProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
HeroScrollIndicator.displayName = "HeroScrollIndicator";

export {
  Hero,
  HeroBackground,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroLogo,
  HeroScrollIndicator,
};
