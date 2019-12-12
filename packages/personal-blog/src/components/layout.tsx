// # Global Imports
import React from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "react-scroll-up";
// #end Global Imports

// # Components and Templates
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ScrollUpButton from "./ScrollUpButton/ScrollUpButton";
// #end Components and Templates

// # Styles and Themes
import ResetCss from "./App/resetCSS";
import theme from "@theme/index";
// #end Styles and Themes

// # Type definitions
type LayoutProps = {
  children: React.ReactNode;
};
// #end Type definintions

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
          <Navbar />
        </Sticky>

        {children}

        <Footer>
          Copyright &copy; {new Date().getFullYear()}
          <a href="https://redq.io/"> RedQ, Inc.</a>
        </Footer>
        <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 20 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
      </>
    </ThemeProvider>
  );
};

export default Layout;
