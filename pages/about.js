import React from "react";
import SiteLayout from "@layouts/SiteLayout";
import About from "@containers/About";

const meta = {
  title: "About",
  tags: ["Next.js", "MDX"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is an about page."
};

const AboutPage = () => {
  return <About />;
};

AboutPage.meta = meta;
AboutPage.Layout = SiteLayout;

export default AboutPage;
