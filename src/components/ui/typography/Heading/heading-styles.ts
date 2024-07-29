import { cva } from "class-variance-authority";

export const headingStyles = cva("box-border font-heading", {
  variants: {
    fluid: {
      sm: "font-heading text-fluid-sm",
      base: "font-heading text-fluid-base",
      md: "font-heading text-fluid-md",
      lg: "font-heading text-fluid-lg",
      xl: "font-heading text-fluid-xl",
      "display-2": "font-heading text-fluid-2xl",
      "display-1": "font-heading text-fluid-3xl",
    },
    size: {
      xs: "font-heading text-xs",
      sm: "font-heading text-sm",
      base: "font-heading text-base",
      lg: "font-heading text-lg", // h6
      xl: "xs:text-xl font-heading text-lg", // h5
      "2xl": "xs:text-2xl font-heading text-xl", // h4
      "3xl": "xs:text-3xl font-heading text-2xl", // h3
      "4xl": "xs:text-4xl font-heading text-3xl", // h2
      "5xl": "xs:text-5xl font-heading text-4xl", // h1
      "6xl": "xs:text-6xl font-heading text-5xl", // h1
    },
    weight: {
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      right: "text-right",
      center: "text-center",
    },
  },
});
