// #region Global Imports
import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/layout";
// #endregion Global Imports

// #region Local Imports
import Footer from "../../Footer";
import Header from "../../Header";
// #endregion Local Imports

type Props = {
  children?: ReactNode;
};

const SiteLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Flex as="main" justifyContent="center" flexDirection="column" minH="84vh" maxW="1600px" m="auto" px={8}>
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default SiteLayout;
