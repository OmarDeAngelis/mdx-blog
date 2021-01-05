import React from "react";
// import Layout from "../components/layout/layout";
import Hero from "../components/global/Hero";
import Blogs from "../components/global/Blogs";
import SEO from "../components/global/SEO";
import { graphql } from "gatsby";
// markup
const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: blogs },
  } = data;
  return (
    <>
      <SEO
        title="Home"
        description="Questa è la home del mio mdx blog. Il blog di prova realizzato con MDX Provider"
      />
      <Hero showImage />
      <Blogs title="Latest Article" blogs={blogs} shareLink />
    </>
  );
};

export const query = graphql`
  {
    allMdx(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
      filter: { slug: { ne: "post" } }
    ) {
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

export default IndexPage;
