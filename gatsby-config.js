module.exports = {
  siteMetadata: {
    siteUrl: 'https://slavinsky.me/',
    title: 'Portfolio',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/Logo.svg',
      },
    },
  ],
}
