import React from "react";
import SiteLayout from "@components/SiteLayout";
import About from "components/About";

const meta = {
  title: "About",
  tags: ["Next.js", "MDX"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is an about page."
};

const About = () => {
  return <About />;
};

About.meta = meta;
About.Layout = SiteLayout;

export default About;
