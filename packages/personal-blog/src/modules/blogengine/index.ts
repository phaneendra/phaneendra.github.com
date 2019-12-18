import posts from "./post-list";
import pages from "./page-list";

export default async (type = "all") => {
  // TODO: create a collection type
  // these lists are already sorted from newest to oldest
  const [pageList, postList] = await Promise.all<any[], any[]>([
    pages(),
    posts()
  ]);

  // after combining the lists, they must be sorted again
  const allData = [...pageList, ...postList];
  const sortedAllData = allData.sort((a, b) =>
    a.formattedPublishDate.isBefore(b.formattedPublishDate) ? 1 : -1
  );
  switch (type) {
    case "posts":
      return postList;
    case "pages":
      return pageList;
    case "all":
    default:
      return sortedAllData;
  }
};
