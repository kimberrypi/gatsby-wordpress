import React from "react";
import moment from "moment";

const Blog = ({ pageContext }) => {
  let { date, title, content } = pageContext;

  return (
    <div className="container content">
      <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="subtitle">{moment(date).format("YYYY-MM-DD, h:mm:ss a")}</p>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Blog;
