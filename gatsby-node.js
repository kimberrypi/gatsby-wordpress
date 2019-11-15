const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
            date
            title
            content
          }
        }
      }
    }
  `);
  const blog = path.resolve(`./src/templates/blog.js`);

  response.data.allWordpressPost.edges.forEach(edge => {
    let { id, slug, date, title, content } = edge.node;

    createPage({
      path: `blog/${slug}`,
      component: blog,
      context: {
        id: id,
        date: date,
        title: title,
        content: content
      }
    });
  });
};
