module.exports = {
  siteMetadata: {
    title: "MDX BLOG",
    titleTemplate: "%s | The Mdx Blog",
    descritpion: "This is my first gastby MDX blog. Whoa MDX is very Awesome!",
    image: "./static/mdx-preview.png",
    siteUrl: "https://mdx-blog-prova.netlify.app",
    url: "https://mdx-blog-prova.netlify.app",
    twitterUsername: "@FilmHpv",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout/layout.js`),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/static/android-chrome-512x512.png`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `216324826`,
      },
    },
  ],
};

//216324826
