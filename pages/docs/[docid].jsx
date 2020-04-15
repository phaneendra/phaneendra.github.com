/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useRouter } from "next/router";

import SiteLayout from "@layouts/SiteLayout";
import Docs from "@templates/Docs";

const meta = {
  title: "Docs",
  tags: ["Next.js", "MDX"],
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is the Docs page.",
};

const DocsPage = () => {
  return <Docs />;
};

DocsPage.meta = meta;
DocsPage.Layout = SiteLayout;

export default DocsPage;
