/** @jsx jsx */
import { jsx, useColorMode, NavLink } from "theme-ui";

import Logo from "@components/Logo";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div
      sx={{
        width: "full",
        maxWidth: "screenxl",
        py: 2,
        mt: 0,
        mx: "auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div
        id="brand"
        sx={{
          pl: 4,
          display: "flex",
          alignItems: "center"
        }}
      >
        <Logo size={12} />
      </div>

      <div
        id="nav-content"
        sx={{
          width: ["full", "full", "auto", "auto"],
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          p: 0,
          mt: 0,
          bg: "transparent"
        }}
      >
        <ul
          id="nav-items"
          sx={{
            display: "flex",
            flex: "1 1 0%",
            alignItems: "center",
            listStyle: "none",
            justifyContent: "flex-end",
            m: 0,
            p: 0
          }}
        >
          <li sx={{ mr: 3 }}>
            <NavLink href="#!" px={4} py={2}>
              Home
            </NavLink>
            {/* <a
              href="#"
              sx={{
                display: "inline-block",
                px: 4,
                py: 2,
                fontWeight: "bold",
                textDecoration: "none"
              }}
            >
              Active
            </a> */}
          </li>
          <li sx={{ mr: 3 }}>
            <a
              href="#"
              sx={{
                display: "inline-block",
                px: 4,
                py: 2,
                textDecoration: "none",
                "&:hover, &:focus": {
                  color: "textMuted",
                  textDecoration: "underline"
                }
              }}
            >
              link
            </a>
          </li>
          <li sx={{ mr: 3 }}>
            <a
              sx={{
                display: "inline-block",
                px: 4,
                py: 2,
                textDecoration: "none",
                "&:hover, &:focus": {
                  color: "textMuted",
                  textDecoration: "underline"
                }
              }}
              href="#"
            >
              link
            </a>
          </li>
        </ul>
        <button
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
};

export default Header;
