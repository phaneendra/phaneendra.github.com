import { Slot } from "@radix-ui/react-slot";
import { usePropId } from "@/hooks/use-prop-id";
import { cn } from "@/lib/utils/cn";
import { type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { linkStyles } from "./nav-link-styles";

export interface NavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkStyles> {
  asChild?: boolean;
}

export type NavLinkElement = React.ElementRef<"a">;

export const NavLink = forwardRef<NavLinkElement, NavLinkProps>(
  (props: NavLinkProps, forwardedRef) => {
    const id = usePropId(props.id);
    const {
      children,
      className,
      size,
      weight,
      align,
      underline,
      intent,
      variant,
      radius,
      asChild = false,
      ...aditionalProps
    } = props;

    const classes = cn(
      linkStyles({ size, weight, align, radius, variant, intent, underline }),
      [className]
    );

    const Comp = asChild ? Slot : "a";

    return (
      <Comp id={id} ref={forwardedRef} className={classes} {...aditionalProps}>
        {children}
      </Comp>
    );
  }
);

NavLink.displayName = "NavLink";
