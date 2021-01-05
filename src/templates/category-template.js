import React from "react";
// import Layout from "../components/layout/layout";
import Hero from "../components/global/Hero";
import { graphql } from "gatsby";
import Blogs from "../components/global/Blogs";
import SEO from "../components/global/SEO";

const Category = ({ data, pageContext: { category } }) => {
  const {
    allMdx: { nodes: blogs },
  } = data;
  return (
    <>
      <SEO
        title={category}
        description={`La sezione per il ${category}. Dedicato completamente a ${category}`}
      />
      <Hero showImage />
      <Blogs title={`Categories/ ${category}`} blogs={blogs} shareLink />
    </>
  );
};

export const query = graphql`
  query GetGategoryPosts($category: String) {
    allMdx(filter: { frontmatter: { category: { eq: $category } } }) {
      nodes {
        excerpt(truncate: false)
        id
        frontmatter {
          author
          category
          date(formatString: "d/MM/YY")
          slug
          title
          readTime
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default Category;
