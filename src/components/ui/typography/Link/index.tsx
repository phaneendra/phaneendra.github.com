import { Slot } from "@radix-ui/react-slot";
import { usePropId } from "@/hooks/use-prop-id";
import { cn } from "@/lib/utils/cn";
import { type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { linkStyles } from "./link-styles";

export type LinkProps = {
  asChild?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkStyles>;

export type LinkElement = React.ElementRef<"a">;

export const Link = forwardRef<LinkElement, LinkProps>(
  (props: LinkProps, forwardedRef) => {
    const id = usePropId(props.id);
    const {
      children,
      className,
      size,
      weight,
      align,
      underline,
      intent,
      asChild = false,
      ...aditionalProps
    } = props;

    const classes = cn(linkStyles({ size, weight, align, intent, underline }), [
      className,
    ]);

    const Comp = asChild ? Slot : "a";

    return (
      <Comp id={id} ref={forwardedRef} className={classes} {...aditionalProps}>
        {children}
      </Comp>
    );
  }
);

Link.displayName = "Link";
