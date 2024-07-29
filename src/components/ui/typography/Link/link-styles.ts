import { cva } from "class-variance-authority";

export const linkStyles = cva(
  [
    "cursor-pointer",
    "text-fglink",
    "no-underline",
    "decoration-solid",
    "decoration-[min(2px,max(1px,0.05em))]",
    "underline-offset-[calc(0.025em+2px)]",
    "decoration-divider",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "focus-visible:outline-uisolid",
    "focus-visible:no-underline",
  ],
  {
    variants: {
      size: {
        xs: "font-sans text-xs",
        sm: "font-sans text-sm",
        base: "font-sans text-base",
        md: "font-sans text-base",
        lg: "font-sans text-lg",
        xl: "font-sans text-xl",
        "2xl": "font-sans text-2xl",
        "3xl": "font-sans text-3xl",
        "4xl": "font-sans text-4xl",
        "5xl": "font-sans text-5xl",
        "6xl": "font-sans text-6xl",
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
      intent: {
        primary:
          "text-primary-fglink decoration-primary-divider focus-visible:outline-primary-uisolid",
        secondary:
          "text-secondary-fglink decoration-divider focus-visible:outline-secondary-uisolid",
        accent:
          "text-accent-fglink decoration-accent-divider focus-visible:outline-accent-uisolid",
        // info: "text-info-fglink decoration-info-divider focus-visible:outline-info-uisolid",
        // success:
        //   "text-success-fglink decoration-success-divider focus-visible:outline-success-uisolid",
        // warning:
        //   "text-warning-fglink decoration-warning-divider focus-visible:outline-warning-uisolid",
        desctructive:
          "text-destructive-fglink decoration-destructive-divider focus-visible:outline-destructive-uisolid",
        // neutral:
        //   "text-neutral-fglink decoration-neutral-divider focus-visible:outline-neutral-uisolid",
        // natural:
        //   "text-natural-fglink decoration-natural-divider focus-visible:outline-natural-solid",
      },
      underline: {
        auto: "hover:underline",
        hover: "hover:underline",
        always: "underline",
      },
    },
  }
);
