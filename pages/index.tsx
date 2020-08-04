// #region Global Imports
import React, { Fragment } from "react";
// #endregion Global Imports

// #region Local Imports
import Layout from "../src/components/layouts/SiteLayout";
import Main from "../src/components/sections/Main";
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
