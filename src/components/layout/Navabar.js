import React from "react";
import styled from "styled-components";
import Links from "../../constant/links";
import { Link } from "gatsby";
import { UseLayoutContext } from "../../context/layout-context";
import { FaBars } from "react-icons/fa";
const Navabar = () => {
  const { openSidebar } = UseLayoutContext();
  return (
    <Wrapper>
      <section className="section-center navbar">
        <Link to="/" className="nav-brand">
          <h2>
            {" "}
            <span>MDX</span>BLOG
          </h2>
        </Link>
        <Links styleClass="nav-links"></Links>
        <FaBars className="icon nav-icon" onClick={openSidebar} />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 5rem;
  display: grid;
  align-items: center;
  background-color: transparent;
  .navbar {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    .nav-brand {
      grid-column: 1/4;
      h2 {
        text-shadow: 0px 4px 6px var(--shadow);
        color: var(--light-black);
      }
      span {
        color: var(--flickr-pink);
      }
    }
    .nav-links {
      display: none;
      position: relative;
      z-index: 100;
      li {
        padding: 0.1rem 0.525rem;
        border-radius: 16px;
        transition: var(--transition);

        a {
          color: var(--light-black);
          font-variant: small-caps;
          font-size: 1.33em;
          text-transform: lowercase;
          font-weight: 700;
        }
        &:hover {
          background-color: var(--color-white);
          a {
            color: var(--flickr-pink);
          }
        }
      }
    }
    .nav-icon {
      grid-column: 12/-1;
      color: var(--flickr-pink);
      &:hover {
        color: var(--byzantine);
      }
    }
  }
  @media screen and (min-width: 992px) {
    .nav-links {
      grid-column: 5/12;
      display: flex !important;
      gap: 5rem;
      justify-content: center;
    }
    .nav-icon {
      display: none;
    }
  }
`;

export default Navabar;
