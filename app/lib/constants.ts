import { NavLink, Feature, FooterSection } from "./types";

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faqs" },
];

export const features: Feature[] = [
  {
    name: "Custom Planning",
    description:
      "Tailored event planning to match your unique vision and requirements.",
    icon: "🎯",
  },
  {
    name: "Premium Venues",
    description:
      "Access to exclusive venues and locations for any type of event.",
    icon: "🏛️",
  },
  {
    name: "Expert Team",
    description:
      "Experienced professionals handling every detail of your event.",
    icon: "👔",
  },
  {
    name: "Catering Options",
    description: "Gourmet catering with customizable menus for all tastes.",
    icon: "🍽️",
  },
  {
    name: "Full Coordination",
    description: "End-to-end management from concept to execution.",
    icon: "📋",
  },
  {
    name: "Global Network",
    description: "Resources and connections for events anywhere in the world.",
    icon: "🌎",
  },
];

export const footerData: FooterSection[] = [
  {
    title: "Services",
    links: [
      { name: "Social Events", href: "#services" },
      { name: "Corporate Events", href: "#services" },
      { name: "Fashion Events", href: "#services" },
      { name: "Event Support", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "FAQ", href: "#faqs" },
    ],
  },
];
