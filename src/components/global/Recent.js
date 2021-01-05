import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
const query = graphql`
  {
    allMdx(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
      filter: { slug: { ne: "post" } }
    ) {
      nodes {
        id
        frontmatter {
          category
          title
          slug
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

const Recent = () => {
  const data = useStaticQuery(query);

  const {
    allMdx: { nodes },
  } = data;
  return (
    <Wrapper>
      {nodes.map((el) => {
        const {
          id,
          frontmatter: {
            title,
            slug,
            category,
            image: {
              childImageSharp: { fluid },
            },
          },
        } = el;
        return (
          <Link key={id} to={`/posts/${slug}`}>
            <Image fluid={fluid} className="related-img" />
            <div className="related-info">
              <h4>{title}</h4>
              <div className="related-category">{category}</div>
            </div>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  a {
    text-decoration: none;
    color: var(--color-grey-8);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    align-items: center;
    .related-img {
      height: 80px;
      border-radius: var(--radius);
    }
    .related-info {
      display: grid;
      gap: 0.5rem;
      h4 {
        font-size: 0.7em;
      }
      .related-category {
        background-color: var(--color-grey-3);
        font-size: 0.65em;
        padding: 0.1rem 0.325rem;
        border-radius: var(--radius);
        font-weight: 700;
        width: fit-content;
        text-transform: uppercase;
        color: var(--color-grey-8);
        font-variant: small-caps;
      }
    }
  }
`;
export default Recent;
