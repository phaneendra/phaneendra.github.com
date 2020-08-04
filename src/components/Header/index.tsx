// #region Global Imports
import React from "react";
import NextLink from "next/link";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Text } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { chakra } from "@chakra-ui/system";
import { FiSun, FiMoon, FiGithub } from "react-icons/fi";
// #endregion Global Imports

// #region Local Imports
import { StickyNav } from "../StickyNav";
import Logo from "../Logo";
// #endregion Local Imports

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxW="1600px"
        width="100%"
        as="nav"
        p={6}
        mx="auto"
      >
        <NextLink href="/" passHref>
          <chakra.a display="flex" aria-label="Back to homepage">
            <Logo />
            <Text as="span" fontWeight="bold" fontSize={[20, 25]} color="gray.500" px="4">
              Phaneendra Krishnareddy
            </Text>
          </chakra.a>
        </NextLink>
        <Box>
          <NextLink href="/dashboard" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Dashboard
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Blog
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </NextLink>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "dark" ? <FiSun /> : <FiMoon />}
            onClick={toggleColorMode}
            size="lg"
            color="gray.500"
            variant="ghost"
          />
          <IconButton aria-label="GitHub" icon={<FiGithub />} size="lg" color="gray.500" variant="ghost" />
        </Box>
      </StickyNav>
    </>
  );
};

export default Header;
