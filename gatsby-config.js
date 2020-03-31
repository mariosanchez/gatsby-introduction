module.exports = {
  siteMetadata: {
    title: 'Gatsby Site',
    description: 'A site done with Gatsby to learn how it works',
  },
  plugins: [
    'gatsby-plugin-emotion', 
    'gatsby-plugin-react-helmet',  
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
  ],
}