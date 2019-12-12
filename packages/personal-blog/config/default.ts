const config = {
  author: "Phaneendra",
  siteName: "Phaneendra Krishnareddy",
  siteDescription: "A Solution Engineer and Product Enthusiast",
  title: "phanee",
  blogTitle: "Blog",
  baseUrl: "https://www.phanee.tk/",
  // For Twitter cards, this logo must be a hosted url, not a relative path.
  // Must be square. Minimum size is 144x144; maximum size 4096x4096.
  websiteLogo: "images/logo.svg",
  // if your string begins with a special character, you usually have to put it in quotes
  twitterHandle: "@phaneekr",
  twitterCardType: "summary",
  // This is list is used to create the links in the navigation panel
  navigation: [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Blog",
      link: "/blog",
    },
    {
      text: "About",
      link: "/about",
    },
  ],
  css: {
    primaryColor: "#536DFE",
    accentColor: "#455A64",
    lightGray: "#eeeeee",
    backgroundColor: "#ffffff",
    black: "#333",
  },
};

export default config;