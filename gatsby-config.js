/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Homepage of Chandrashekhar Tripathi`,
    siteUrl: `https://tripathics.github.io/`,
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Chandrashekhar Tripathi',
        short_name: 'Chandrashekhar Tripathi',
        description:
          'CS Undergrad at NIT Arunachal Pradesh. This is my homepage.',
        start_url: '/',
        background_color: '#31363b',
        theme_color: '#31363b',
        display: 'minimal-ui',
        icon: `static/logo.png`,
      },
    },

    'gatsby-plugin-sass',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      }
    },

    // images
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/content`
      }
    },

    // static
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },


    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: 'shyam',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },
  ],
}
