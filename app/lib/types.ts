// // import { ReactNode } from 'react';

// // Base props shared by all button variants
// export type ButtonVariant = 'primary' | 'secondary' | 'white';
// export type ButtonSize = 'sm' | 'md' | 'lg';

// interface CommonButtonProps {
//   variant?: ButtonVariant;
//   size?: ButtonSize;
//   className?: string;
// }

// // Regular button props
// export interface ButtonProps
//   extends CommonButtonProps,
//           React.ButtonHTMLAttributes<HTMLButtonElement> {
//   asLink?: false | undefined;
// }

// // Link button props
// export interface LinkButtonProps
//   extends CommonButtonProps,
//           React.AnchorHTMLAttributes<HTMLAnchorElement> {
//   asLink: true;
//   href: string;
// }

// // Union type that can be either regular button or link button
// export type PolymorphicButtonProps = ButtonProps | LinkButtonProps;

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

export interface NavLink {
  name: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guests: string;
  message: string;
}

type ButtonVariant = "primary" | "secondary" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  asLink?: false;
}

export interface LinkButtonProps
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> {
  asLink: true;
  href: string;
}

export type PolymorphicButtonProps = ButtonProps | LinkButtonProps;
