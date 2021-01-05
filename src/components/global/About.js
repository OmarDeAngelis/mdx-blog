import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";

const query = graphql`
  {
    file(relativePath: { eq: "my-profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(query);
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data;
  return (
    <Wrapper to="/newsletter">
      <Image className="about-img" fluid={fluid} />
      <p>
        I'm baby vice retro la croix, health goth hoodie vinyl blog pabst. Echo
        park crucifix lo-fi pork belly, migas keffiyeh tacos taxidermy air
        plant. Semiotics blue bottle squid
      </p>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  text-decoration: none;
  color: var(--color-grey-6);
  display: grid;
  gap: 0.5rem;
  padding: 0.5rem;
  place-items: center;
  .about-img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }
  p {
    text-align: center;
    font-size: 0.875em;
  }
`;

export default About;
