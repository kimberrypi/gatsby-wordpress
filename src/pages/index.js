import React from "react";
// import { useStaticQuery, graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allWordpressPost {
  //       totalCount
  //       nodes {
  //         id
  //         slug
  //         title
  //       }
  //     }
  //   }
  // `);
  // let blogPosts = data.allWordpressPost.nodes;

  return (
    <Layout>
      <SEO title="Home" />
      <div className="content">
        <br />
        <h1 className="title">Hi people</h1>
        <p className="subtitle">
          I can't wait to play the new Pokemon! I will, after this talk. In the
          meantime, let's look at these articles:
        </p>

        {/* <ul>
          {blogPosts.map(blog => (
            <li key={blog.slug} className="has-text-black">
              <Link to={`blog/${blog.slug}`}>
                <p dangerouslySetInnerHTML={{ __html: blog.title }} />
              </Link>
            </li>
          ))}
        </ul> */}
      </div>

      <div style={{ marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  );
};

export default IndexPage;
