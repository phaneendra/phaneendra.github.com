// # Global Imports
import React from "react";
import Sticky from "react-stickynode";
import ScrollToTop from "react-scroll-up";
// #end Global Imports

// # Components and Templates
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollUpButton from "../components/ScrollUpButton/ScrollUpButton";
// #end Components and Templates

// # Type definitions
type LayoutProps = {
  children: React.ReactNode;
};
// #end Type definintions

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
        <Navbar />
      </Sticky>

      {children}

      <Footer>
        Copyright &copy; {new Date().getFullYear()}
        <a href="https://phanee.tk/"> Phaneendra .</a>
        Powered by <a href="https://nextjs.org/"> Next Js </a>
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
  );
};

export default Layout;
