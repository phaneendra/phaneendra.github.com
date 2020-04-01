/** @jsx jsx */
import { jsx, NavLink as ThemeUiNavLink } from "theme-ui";

const NavLink = props => {
  return (
    <ThemeUiNavLink
      {...props}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        mr: 3,
        px: 4,
        py: 2,
        "&:hover, &:focus": {
          bg: "backgroundHover"
        },
        ...props.sx
      }}
    />
  );
};

export default NavLink;
