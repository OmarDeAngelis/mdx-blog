import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";
const Blog = ({ excerpt, frontmatter }) => {
  const {
    category,
    date,
    readTime,
    slug,
    title,
    image: {
      childImageSharp: { fluid },
    },
  } = frontmatter;
  return (
    <Wrapper>
      <Image fluid={fluid} className="img" />
      <div className="blog-content">
        <div className="info">
          <h4>{title}</h4>
          <span> {category}</span>
        </div>
        <hr />
        <p>{excerpt}</p>
        <Link to={`/posts/${slug}`}> Read More &#8594; </Link>
        <hr />
        <div className="info">
          <p>{date}</p>
          <p>Time: {readTime};</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1rem 1rem 1rem 0rem;
  display: grid;
  gap: 1rem;
  .img {
    border-radius: var(--radius);
    min-height: 19rem;
  }
  .blog-content {
    display: grid;
    gap: 0.3rem !important;
    hr {
      height: fit-content;
      border: 0px solid;
      border-bottom: 1px solid;
    }
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
    p {
      font-size: 0.875em;
    }
    a {
      color: var(--purple);
      width: fit-content;
      font-size: 1.15em;
      font-weight: 700;
      transition: var(--transition);
      &:hover {
        color: var(--flickr-pink);
      }
    }
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default Blog;
