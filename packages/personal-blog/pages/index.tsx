import React from "react";
import Layout from "../src/components/layout";
import PersonalBlog from "../src/containers/HomePage";
import SEO from "../src/components/seo";

const PersonalBlogPage = (props: any) => {
  const { data } = props;

  return (
    <Layout>
      <SEO
        title="Personal Blog Lite"
        description={data.site.siteMetadata.description}
      />
      <PersonalBlog />
    </Layout>
  );
};

export default PersonalBlogPage;
