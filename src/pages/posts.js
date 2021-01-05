import React from "react";
// import Layout from "../components/layout/layout";
import Hero from "../components/global/Hero";
import Blogs from "../components/global/Blogs";
import SEO from "../components/global/SEO";
import { graphql } from "gatsby";

const posts = ({ data }) => {
  const {
    allMdx: { nodes: blogs },
  } = data;
  return (
    <>
      <SEO
        title="All Posts"
        description="All posts: la sezione in cui si possono trovare tutti i mdx post disponibilie"
      />
      <Hero showImage />
      <Blogs title="All Article" blogs={blogs} />
    </>
  );
};

export const query = graphql`
  {
    allMdx(filter: { slug: { ne: "post" } }) {
      nodes {
        id
        excerpt(truncate: true)
        frontmatter {
          author
          category
          date(formatString: "D/MM/YY")
          readTime
          slug
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default posts;
