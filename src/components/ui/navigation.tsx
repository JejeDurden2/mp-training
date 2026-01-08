"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, children, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-brand-gray-dark/30",
        className
      )}
      role="navigation"
      aria-label="Navigation principale"
      {...props}
    >
      {children}
    </nav>
  )
);
Navbar.displayName = "Navbar";

const NavbarContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "max-w-7xl mx-auto px-4 py-3 flex items-center justify-between",
      className
    )}
    {...props}
  />
));
NavbarContainer.displayName = "NavbarContainer";

const NavbarBrand = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn("block", className)}
    aria-label="MP Training Nice - Retour à l'accueil"
    {...props}
  />
));
NavbarBrand.displayName = "NavbarBrand";

const NavbarMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "hidden lg:flex items-center gap-8 font-audiowide text-sm tracking-widest",
      className
    )}
    role="menubar"
    {...props}
  />
));
NavbarMenu.displayName = "NavbarMenu";

interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const NavbarLink = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "text-white transition-opacity hover:opacity-70",
        className
      )}
      role="menuitem"
      {...props}
    />
  )
);
NavbarLink.displayName = "NavbarLink";

interface NavbarToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

const NavbarToggle = React.forwardRef<HTMLButtonElement, NavbarToggleProps>(
  ({ className, isOpen, ...props }, ref) => (
    <button
      ref={ref}
      className={cn("lg:hidden p-2 text-white", className)}
      aria-label="Ouvrir le menu de navigation"
      aria-expanded={isOpen}
      {...props}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  )
);
NavbarToggle.displayName = "NavbarToggle";

interface NavbarMobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

const NavbarMobileMenu = React.forwardRef<HTMLDivElement, NavbarMobileMenuProps>(
  ({ className, isOpen, children, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "lg:hidden p-4 bg-black border-t border-white/10 font-audiowide text-sm tracking-widest",
          className
        )}
        role="menu"
        aria-label="Menu mobile"
        {...props}
      >
        {children}
      </div>
    );
  }
);
NavbarMobileMenu.displayName = "NavbarMobileMenu";

const NavbarMobileLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "block py-2 text-white transition-opacity hover:opacity-70",
      className
    )}
    role="menuitem"
    {...props}
  />
));
NavbarMobileLink.displayName = "NavbarMobileLink";

export {
  Navbar,
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarLink,
  NavbarToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
};
