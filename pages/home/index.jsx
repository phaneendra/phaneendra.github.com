// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import Layout from "../../src/components/layouts/SiteLayout";
import Layout from "../../src/components/sections/Main";
// #endregion Local Imports

const meta = {
  title: "Home",
  tags: ["Next.js", "MDX"],
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is the Home page."
};

const HomePage = () => (
  <Layout>
    <Fragment>
      <Main />
    </Fragment>
  </Layout>
);

HomePage.meta = meta;

export default HomePage;
