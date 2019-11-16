require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Pokemon Sword and Shield`,
    description: `A demo of gatsby-source-wordpress`,
    author: `@kimberrypi`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#CC0000`,
        theme_color: `#CC0000`,
        display: `minimal-ui`,
        icon: `src/images/pokeball.png`
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.GATSBY_WP_URL,
        protocol: `https`,
        hostingWPCOM: true,
        useACF: false
      }
    },
    `gatsby-plugin-sass`
  ]
};
