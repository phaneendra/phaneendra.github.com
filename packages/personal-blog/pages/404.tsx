import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import ResetCss from "../src/components/App/resetCSS";
import SEO from "../src/components/seo";
import NotFound from "../src/containers/NotFound";
import Footer from "../src/components/Footer/Footer";

const NotFoundPage = (props: any) => {
  return (
    <>
      <ResetCss />
      <Navbar />
      <SEO title="404: Not Found" />
      <NotFound />
      <Footer>
        Copyright &copy; {new Date().getFullYear()}
        <a href="https://redq.io/"> RedQ, Inc.</a>
      </Footer>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
