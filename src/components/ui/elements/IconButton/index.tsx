import { Slot } from "@radix-ui/react-slot";
import { usePropId } from "@/hooks/use-prop-id";
import { cn } from "@/lib/utils/cn";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";

import { iconButtonStyles } from "./icon-button-styles";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonStyles> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props: IconButtonProps, forwardedRef) => {
    const id = usePropId(props.id);
    const {
      children,
      className,
      variant,
      size,
      weight,
      intent,
      align,
      radius,
      asChild = false,
      ...aditionalProps
    } = props;

    const Comp = asChild ? Slot : "button";
    const classes = cn(
      iconButtonStyles({
        variant,
        size,
        weight,
        intent,
        align,
        radius,
      }),
      [className]
    );

    return (
      <Comp id={id} ref={forwardedRef} className={classes} {...aditionalProps}>
        {children}
      </Comp>
    );
  }
);
IconButton.displayName = "Button";

export { IconButton, iconButtonStyles };
