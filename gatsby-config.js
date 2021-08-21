module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ngoayuda.org",
    title: "website-v2",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure your indicator bar color here
        color: "linear-gradient(to right, #0034a5, #001C59)",
        height: "6px",
      },
    },
    "gatsby-plugin-sass",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
