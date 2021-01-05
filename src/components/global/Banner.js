import React from "react";
import styled from "styled-components";
import About from "./About";
import Ig from "./Ig";
import Recent from "./Recent";
import Categories from "./Categories";
import BannerTitle from "./BannerTitle";
const Banner = () => {
  return (
    <Wrapper>
      <BannerTitle title="About Me" />
      <About />
      <BannerTitle title="Instagram" />

      <Ig />
      <BannerTitle title="Last Article" />

      <Recent />
      <BannerTitle title="Categories" />
      <section className="categories-section">
        <ul className="cat-ul">
          <Categories />
        </ul>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
  width: 90%;
  margin: 0 auto;
  .categories-section {
    padding: 0.5rem;
    .cat-ul {
      list-style: none;
      display: grid;
      gap: 0.5rem;
    }
  }
`;
export default Banner;
