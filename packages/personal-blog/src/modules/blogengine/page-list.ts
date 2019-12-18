// # Global Imports
import preval from "preval.macro";
import moment from "moment";
// #end Global Imports

// # Modules and Configs
import config from "@config/default";
// # Modules and Configs

// _app.js and _document.js are next.js specific files, and should be ignored
// the blog directory is ignored here, but is processed in post-list.js
const ignoreList = ["_app.js", "_document.js", "blog"];

const pageFileNames = () => {
  const allPageFileNames: Array<string> =
    preval`module.exports = require("fs").readdirSync("./pages")` || [];
  const filteredFileNames = allPageFileNames.filter(
    name => !name || !ignoreList.includes(name)
  );
  return Promise.resolve(filteredFileNames);
};

const createPageList = (fileNameList: Array<string>) => {
  // TODO: create a collection type
  return fileNameList.reduce<any[]>((collection, name) => {
    // These are properties we want to extract from the file's meta export.
    // This data is returned is added to the `collection` array below.
    const { default: Component } = require(`../pages/${name}`);
    const {
      title,
      tags,
      layout,
      publishDate,
      modifiedDate,
      seoDescription,
      hideProgressBar = false,
      ...moreMeta // any extra properties a page may have
    } = require(`../pages/${name}`).meta;

    // remove the extension from the file name to make a component name string
    let cleanedName = name.split(".")[0];

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
      urlPath: `/${cleanedName === "index" ? "" : cleanedName}`,
      canonicalUrl: `${config.baseUrl}/${
        cleanedName === "index" ? "" : cleanedName
      }`,
      hideProgressBar,
      name: cleanedName,
      type: "page",
      ...moreMeta // any extra properties a page may have
    });

    return collection;
  }, []);
};

const pages = async () => {
  try {
    const fileNameList = await pageFileNames();
    const pageList = createPageList(fileNameList);
    const sortedList = pageList.sort((a, b) =>
      a.formattedPublishDate.isBefore(b.formattedPublishDate) ? 1 : -1
    );
    return sortedList;
  } catch (error) {
    console.log("Error creating pageList", error);
    return Promise.reject(error.message || error);
  }
};

export default pages;
