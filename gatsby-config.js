module.exports = {
  siteMetadata: {
    siteUrl: "https://ngoayuda.org",
    title: "website-v2",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-medium-feed",
      options: {
        userName: "ayuda-ngo", // Medium user name
        name: "MediumFeed", // GraphQL query AllMediumFeed
      },
    },
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
