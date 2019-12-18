// # Global Imports
import preval from "preval.macro";
import moment from "moment";
// #end Global Imports

// # Modules and Configs
import config from "@config/default";
// # Modules and Configs

const postFileNames = () => {
  const postFileNames: Array<string> =
    preval`module.exports = require("fs").readdirSync("./pages/blog")` || [];
  return Promise.resolve(postFileNames);
};

const createPostList = (fileNameList: Array<string>) => {
  // TODO: create a collection type
  return fileNameList.reduce<any[]>((collection, name) => {
    // These are properties we want to extract from the file's meta export.
    // This data is returned is added to the `collection` array below.
    const { default: Component } = require(`../pages/blog/${name}`);
    const {
      title,
      tags,
      layout,
      publishDate,
      modifiedDate,
      seoDescription,
      hideProgressBar = false,
      exclude = false,
      ...moreMeta // any extra properties a post may have
    } = require(`../pages/blog/${name}`).meta;

    if (exclude) return collection;

    // remove the extension from the file name to make a component name string
    const cleanedName = name.split(".")[0];

    // format dates for SEO, but preserve publishDate as the latter is
    // displayed on the blog post. Currently not displaying modifiedDate, but
    // preserving it for possible future use.
    const formattedPublishDate = moment(publishDate).format(
      moment.HTML5_FMT.DATE
    );

    const formattedModifiedDate = moment(modifiedDate).format(
      moment.HTML5_FMT.DATE
    );

    // data that is returned for each page
    collection.push({
      Component,
      title,
      tags,
      layout,
      publishDate,
      formattedPublishDate,
      modifiedDate,
      formattedModifiedDate,
      seoDescription,
      exclude,
      urlPath: `/${cleanedName}`,
      fullUrlPath: `/blog/${cleanedName}`,
      canonicalUrl: `${config.baseUrl}/${cleanedName}`,
      hideProgressBar,
      name: cleanedName,
      type: "post",
      ...moreMeta // any extra properties a post may have
    });

    return collection;
  }, []);
};

const posts = async () => {
  try {
    const fileNameList = await postFileNames();
    const postList = createPostList(fileNameList);
    const sortedList = postList.sort((a, b) =>
      a.formattedPublishDate.isBefore(b.formattedPublishDate) ? 1 : -1
    );
    return sortedList;
  } catch (error) {
    console.log("Error creating postList", error);
    return Promise.reject(error.message || error);
  }
};

export default posts;
