import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

export interface NavLink {
  name: string;
  href: string;
}

export interface Feature {
  name: string;
  description: string;
  icon: string;
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
