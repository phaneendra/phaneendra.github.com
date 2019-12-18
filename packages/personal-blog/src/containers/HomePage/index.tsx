import * as React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

import Layout from "@src/templates/layout";
import { createSEOConfig } from "@components/Seo";
import PersonalBlogWrapper from "./style";
// import Intro from "./Intro";
// import Posts from "./Posts";

type PersonalBlogProps = {};

const postData = { tags: [] };
const seoData = createSEOConfig(postData);
const tagsString = postData.tags.join(", ");

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <Layout>
      {/* (1) SEO  */}
      <Head>
        <meta name="keywords" content={tagsString} />
      </Head>
      <NextSeo {...seoData} />
      {/* (2) page styles */}
      <PersonalBlogWrapper {...props}>
        {/* (3) page body */}
        {/* <Intro />
        <Posts /> */}
      </PersonalBlogWrapper>
    </Layout>
  );
};

export default PersonalBlog;
