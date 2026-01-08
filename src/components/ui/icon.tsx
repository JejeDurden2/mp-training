import * as React from "react";
import { cn } from "@/lib/utils";

interface NeonIconProps extends React.HTMLAttributes<HTMLDivElement> {}

const NeonIcon = React.forwardRef<HTMLDivElement, NeonIconProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-14 h-14 mb-4 rounded-full flex items-center justify-center border border-brand-accent shadow-[0_0_10px_rgba(0,128,255,0.5),0_0_20px_rgba(0,128,255,0.25)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
NeonIcon.displayName = "NeonIcon";

interface NeonSvgProps extends React.HTMLAttributes<HTMLDivElement> {}

const NeonSvg = React.forwardRef<HTMLDivElement, NeonSvgProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "[&_svg]:w-6 [&_svg]:h-6 [&_svg]:stroke-brand-accent [&_svg]:filter [&_svg]:[filter:drop-shadow(0_0_4px_var(--color-brand-accent))]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
NeonSvg.displayName = "NeonSvg";

interface NeonArrowProps extends React.SVGProps<SVGSVGElement> {}

const NeonArrow = React.forwardRef<SVGSVGElement, NeonArrowProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      className={cn(
        "w-6 h-6 stroke-brand-accent [filter:drop-shadow(0_0_6px_var(--color-brand-accent))_drop-shadow(0_0_12px_var(--color-brand-accent))]",
        className
      )}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  )
);
NeonArrow.displayName = "NeonArrow";

export { NeonIcon, NeonSvg, NeonArrow };
