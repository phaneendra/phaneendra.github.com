/** @jsx jsx */
import { jsx, useColorMode, Flex } from "theme-ui";

import Logo from "@components/Logo";
import NavLink from "@components/NavLink";

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
        alignItems: "stretch",
        justifyContent: "space-between"
      }}
    >
      <Flex
        id="brand"
        sx={{
          pl: 4,
          alignItems: "center"
        }}
      >
        <Logo size={12} />
        <span>@phaneendra/notebook</span>
      </Flex>

      <Flex
        as="nav"
        id="primary-navigation"
        sx={{
          width: ["full", "full", "auto", "auto"],
          flexGrow: 1,
          alignItems: "stretch",
          justifyContent: "flex-end",
          pl: 4,
          mt: 0,
          bg: "transparent"
        }}
      >
        <NavLink href="#!">Home</NavLink>
        <NavLink href="#!">About</NavLink>
        <NavLink href="#!">Reach Me</NavLink>

        {/* 
        <button
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </button> */}
      </Flex>
    </Flex>
  );
};

export default Header;
