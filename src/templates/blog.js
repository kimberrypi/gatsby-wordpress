import React from "react";
import moment from "moment";

import Layout from "../components/layout";

const Blog = ({ pageContext }) => {
  let { date, title, content } = pageContext;

  return (
    <Layout>
      <div className="container content">
        <br />
        <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="subtitle">
          {moment(date).format("YYYY-MM-DD, h:mm:ss a")}
        </p>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  );
};

export default Blog;
