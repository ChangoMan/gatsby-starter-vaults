module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Vaults',
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: "https://website1.gorillatestserver.gorillafunds.eu",
    //   },
    // },
    'gatsby-plugin-image',
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "123",
    //   },
    // },

    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
