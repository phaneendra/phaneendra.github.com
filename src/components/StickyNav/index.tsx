// #region Global Imports
import * as React from "react";
import { chakra, PropsOf, useStyleConfig, omitThemingProps, ThemingProps } from "@chakra-ui/system";
import { __DEV__, cx } from "@chakra-ui/utils";
// #endregion Global Imports

export type StickyNavProps = PropsOf<typeof chakra.div> & ThemingProps;

export const StickyNav = React.forwardRef(function StickyNav(props: StickyNavProps, ref: React.Ref<any>) {
  const styles = useStyleConfig("StickyNav", props);
  const { className, ...rest } = omitThemingProps(props);

  return (
    <chakra.div
      ref={ref}
      className={cx("ui-stickynav", props.className)}
      {...rest}
      __css={{
        display: "flex",
        position: "sticky",
        zIndex: "10",
        // transition: "background-color 0.1 ease-in-out",
        // backdropFilter: "saturate(180%) blur(20px)",
        top: "0",
        ...styles
      }}
    />
  );
});

if (__DEV__) {
  StickyNav.displayName = "StickyNav";
}
