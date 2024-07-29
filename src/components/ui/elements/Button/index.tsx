import { cn } from "@/lib/utils/cn";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";

import { buttonStyles } from "./button-styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, weight, intent, align, radius, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonStyles({
            variant,
            size,
            weight,
            intent,
            align,
            radius,
          }),
          [className]
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonStyles };
