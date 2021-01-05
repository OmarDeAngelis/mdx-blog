import React from "react";
import Blog from "./Blog";
import Banner from "./Banner";
import { Link } from "gatsby";
import styled from "styled-components";
const Blogs = ({ blogs, title, shareLink }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <div className="blogs-section">
        <div className="content">
          {blogs.map((item) => {
            return <Blog key={item.id} {...item} />;
          })}
          {shareLink && (
            <Link to="/posts" className="btn">
              {" "}
              All Post{" "}
            </Link>
          )}
        </div>
        <Banner />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: white;
  padding: 2rem;
  display: grid;
  gap: 3rem;
  h3 {
    color: var(--flickr-pink);
  }
  .content {
    display: grid;
    gap: 1.5rem;
  }
  .btn {
    width: fit-content;
    justify-self: center;
  }
  @media screen and (min-width: 992px) {
    .blogs-section {
      display: grid;
      align-items: flex-start;
      grid-template-columns: 2.5fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Blogs;
