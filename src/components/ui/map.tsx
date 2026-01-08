import * as React from "react";
import { cn } from "@/lib/utils";

interface MapContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const MapContainer = React.forwardRef<HTMLDivElement, MapContainerProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative w-full h-80 [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:border-0 [&_iframe]:grayscale [&_iframe]:invert-[0.92] [&_iframe]:contrast-[0.83] after:absolute after:inset-0 after:pointer-events-none after:border after:border-brand-gray-dark/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
MapContainer.displayName = "MapContainer";

export { MapContainer };
