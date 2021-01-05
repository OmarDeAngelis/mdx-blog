import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import { UseLayoutContext } from "../../context/layout-context";
const query = graphql`
  {
    allMdx(filter: { slug: { ne: "post" } }) {
      distinct(field: frontmatter___category)
    }
  }
`;

const Categories = () => {
  const data = useStaticQuery(query);
  const { closeSidebar } = UseLayoutContext();
  const {
    allMdx: { distinct },
  } = data;
  return (
    <>
      {distinct.map((item, index) => {
        return (
          <Wrapper key={index} className="category-link">
            <Link to={`/${item}`} onClick={closeSidebar}>
              {item}
            </Link>
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.li`
  padding: 0.5rem 0.5rem 0.5rem 0rem;
  transition: var(--transition);
  cursor: pointer;
  a {
    color: var(--color-grey-6);
    text-decoration: none;
    transition: var(--transition);
  }
  &:hover {
    background-color: var(--color-grey-1);
    a {
      color: var(--color-grey-7);
    }
  }
`;
export default Categories;
