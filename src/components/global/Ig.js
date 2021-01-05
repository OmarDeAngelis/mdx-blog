import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";

const query = graphql`
  {
    allInstaNode(limit: 6) {
      nodes {
        localFile {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
const Ig = () => {
  const data = useStaticQuery(query);
  const {
    allInstaNode: { nodes },
  } = data;

  return (
    <Wrapper href="https://www.instagram.com/thomas_aka_omar/" target="_blank">
      {nodes.map((post) => {
        const {
          localFile: {
            childImageSharp: { id, fluid },
          },
        } = post;

        return (
          <article key={id}>
            <Image className="ig-image" fluid={fluid} />
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.a`
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  article {
    .ig-image {
      border-radius: var(--radius);
      height: 80px;
    }
  }
`;
export default Ig;
