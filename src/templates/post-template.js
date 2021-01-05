import React from "react";
// import Layout from "../components/layout/layout";
import Hero from "../components/global/Hero";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/global/SEO";
import Banner from "../components/global/Banner";
const SinglePost = ({ data }) => {
  const { mdx: post } = data;
  const {
    category,
    date,
    author,
    title,
    image: {
      childImageSharp: { fluid },
    },
  } = post.frontmatter;
  return (
    <>
      <SEO
        title={title}
        description={`${title}. Articolo per approfondire ${title} e ${category}`}
      />
      <Hero showImage />
      <Wrapper>
        <section className="layout-section">
          <div className="post-section">
            <Image fluid={fluid} />
            <div className="content">
              <div className="info">
                <h4>{title}</h4>
                <span> {category}</span>
              </div>
              <MDXRenderer>{post.body}</MDXRenderer>
              <hr />
              <div className="info">
                <p>{date}</p>
                <p>Written by: {author}</p>
              </div>
            </div>
          </div>
          <Banner />
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  background-color: white;
  padding: 2rem;
  .layout-section {
    margin-top: 2rem;
    .post-section {
      width: 90%;
      margin: 0 auto;
      display: grid;
      gap: 1rem;
    }
  }
  .content {
    display: grid;
    gap: 0.3rem !important;
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        background-color: var(--color-grey-3);
        font-size: 0.85em;
        padding: 0.1rem 0.325rem;
        border-radius: var(--radius);
        font-weight: 700;
        text-transform: uppercase;

        color: var(--color-grey-8);
        font-variant: small-caps;
      }
    }
  }
  @media screen and (min-width: 992px) {
    .layout-section {
      display: grid;
      align-items: flex-start;
      grid-template-columns: 2.5fr 1fr;
      gap: 2rem;
    }
  }
`;

export const query = graphql`
  query SinglePostQuery($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        author
        category
        date(formatString: "D MMMM YYYY")
        readTime
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
`;

export default SinglePost;
