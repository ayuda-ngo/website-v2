module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "website-v2",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-source-medium-feed",
    //   options: {
    //     userName: "@...", // Medium user name
    //     name: "MediumFeed", // GraphQL query AllMediumFeed
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-EW6ZSHV93Q",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
