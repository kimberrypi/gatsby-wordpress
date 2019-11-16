<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Wordpress Demo
</h1>

This project demonstrates how to source data from Wordpress using the plugin `gatsby-source-wordpress`.

## 📂 Branches

Branches are prefixed with the process of integrating Wordpress to Gatsby:

### `01-install-plugin`: Demonstrates how to install the `gatsby-source-wordpress` plugin and how to setup `gatsby-config.js`.

1. Install the plugin:

   ```
   yarn add gatsby-source-wordpress
   ```

2. Create a `.env` file:

   ```
   GATSBY_WP_URL=blog.wordpress.com
   GATSBY_WP_PROTOCOL=https
   GATSBY_REPLACEMENT_URL=http://localhost:8000
   ```

3. Modify `gatsby-config.js`:

   ```js
   require("dotenv").config();

   module.exports = {
     plugins: [
       {
         resolve: `gatsby-source-wordpress`,
         options: {
           baseUrl: process.env.GATSBY_WP_URL,
           protocol: `https`,
           hostingWPCOM: true,
           useACF: false
         }
       }
     ]
   };
   ```

### `02-create-pages`: Modify `gatsby-node.js` to programatically create pages for each Wordpress blog post.

1. Create a `blog.js` template component. All Wordpress blog posts will have this layout:

   ```jsx
   import React from "react";
   import moment from "moment";

   const Blog = ({ pageContext }) => {
     let { date, title, content } = pageContext;

     return (
       <div className="container content">
         <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
         <p className="subtitle">
           {moment(date).format("YYYY-MM-DD, h:mm:ss a")}
         </p>
         <p dangerouslySetInnerHTML={{ __html: content }} />
       </div>
     );
   };

   export default Blog;
   ```

2. Modify `gatsby-node.js`:

   ```js
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
   ```

### `03-bloglist`: List all blog posts in one page.

1.  Update `index.js`:

    ```js
    import React from "react";
    import { useStaticQuery, graphql, Link } from "gatsby";
    ...

    const IndexPage = () => {
      const data = useStaticQuery(graphql`
        {
          allWordpressPost {
            totalCount
            nodes {
              id
              slug
              title
            }
          }
        }
      `);
      let blogPosts = data.allWordpressPost.nodes;

        return (
          <Layout>
            ...
            <ul>
              {blogPosts.map(blog => (
                <li key={blog.slug} className="has-text-black">
                  <Link to={`blog/${blog.slug}`}>
                    <p dangerouslySetInnerHTML={{ __html: blog.title }} />
                  </Link>
                </li>
              ))}
            </ul>
        </Layout>
      );
    };
    ```

## ✨ Use this project as a starter

```
gatsby new [project-name] https://github.com/kimberrypi/gatsby-wordpress.git
```

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->
