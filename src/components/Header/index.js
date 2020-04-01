/** @jsx jsx */
import { jsx, useColorMode, NavLink, Box, Flex } from "theme-ui";

import Logo from "@components/Logo";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Flex
      as="header"
      sx={{
        width: "full",
        maxWidth: "screenxl",
        height: 16,
        mx: "auto",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Box
        id="brand"
        sx={{
          pl: 4,
          display: "flex",
          alignItems: "center"
        }}
      >
        <Logo size={12} />
        <span>@phaneendra/notebook</span>
      </Box>

      <Box
        as="nav"
        id="primary-navigation"
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
          <li
            sx={{
              mr: 3,
              "&:hover, &:focus": {
                bg: "backgroundHover",
                textDecoration: "underline"
              }
            }}
          >
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
      </Box>
    </Flex>
  );
};

export default Header;
