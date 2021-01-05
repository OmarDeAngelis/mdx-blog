import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = ({ showImage }) => {
  const data = useStaticQuery(query);
  return (
    <Wrapper className="hero">
      {showImage && (
        <Image className="person-img" fluid={data.file.childImageSharp.fluid} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 19rem;
  /* margin-top: -5rem; */
  padding-top: 5rem;
  position: relative;
  display: grid;
  .person-img {
    margin-top: 1rem;
    justify-self: end;
    align-self: center;
    width: 25rem;
    z-index: 66;
  }
  @media screen and (max-width: 992px) {
    .person-img {
      display: none;
    }
  }
`;
export default Hero;
