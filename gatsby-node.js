exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      allMdx(filter: { slug: { ne: "post" } }) {
        distinct(field: frontmatter___category)
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    const slug = node.frontmatter.slug;
    createPage({
      path: `/posts/${slug}`,
      component: require.resolve(`${__dirname}/src/templates/post-template.js`),
      context: { slug: slug },
    });
  });

  data.allMdx.distinct.map((el) => {
    createPage({
      path: `/${el}`,
      component: require.resolve(
        `${__dirname}/src/templates/category-template.js`
      ),
      context: {
        category: el,
      },
    });
  });
};
