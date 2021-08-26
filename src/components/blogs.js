import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const generateMediumCard = (data) => {
  return (
    <div className="card">
      <h2>{data.title}</h2>
      <p>
        -- by {data.author}
        <br />
        <br />
        Published on: {data.date}
      </p>

      <a href={data.link} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

const Blogs = () => {
  const data = useStaticQuery(meduimFeedQuery);

  const posts = data.allMediumFeed.edges;

  return (
    <div className="Blogspot">
      <br />
      <br />
      <div className="title">
        <h1>BLOGSPOT</h1>
      </div>

      <div className="scrollmenu">
        {posts.map(({ node }) => generateMediumCard(node))}
      </div>
    </div>
  );
};

const meduimFeedQuery = graphql`
  {
    allMediumFeed {
      edges {
        node {
          id
          link
          title
          author
          thumbnail
          date(formatString: "Do MMMM, YYYY")
        }
      }
    }
  }
`;

export default Blogs;
