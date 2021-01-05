import React from "react";
import styled from "styled-components";
import Links from "../../constant/links";
import Categories from "../global/Categories";
import { Link } from "gatsby";
import SocialLinks from "../../constant/socialLinks";
import { FaWindowClose } from "react-icons/fa";
import { UseLayoutContext } from "../../context/layout-context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = UseLayoutContext();
  return (
    <Wrapper className={`${isSidebarOpen ? "show-sidebar" : ""}`}>
      <section className="section-center sidebar">
        <header className="sidebar-header">
          <Link to="/" className="nav-brand">
            <h2>
              {" "}
              <span>MDX</span>BLOG
            </h2>
          </Link>
          <FaWindowClose className="icon nav-icon" onClick={closeSidebar} />
        </header>
        <Links styleClass="nav-links" closeSidebar={closeSidebar}>
          <Categories />
        </Links>
        <SocialLinks styleClass="row-social sidebar-social" />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--color-grey-1);
  transform: translateX(-100%);
  z-index: 999;
  transition: var(--transition);
  .sidebar {
    display: grid;
    gap: 3rem;
    .sidebar-header {
      height: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        text-shadow: 0px 4px 6px var(--shadow);
        color: var(--light-black);

        span {
          color: var(--flickr-pink);
        }
      }
    }
    .nav-links {
      display: grid;
      gap: 0.8rem;
      width: 100%;
      place-items: center;
      li {
        padding: 0.1rem 0.525rem 0.1rem 0rem;
        border-radius: 16px;
        text-align: center;
        a {
          color: var(--light-black);
          font-variant: small-caps;
          font-size: 1.5em;
          letter-spacing: 0.14rem;
          text-transform: lowercase;
          font-weight: 700;
        }
        &:hover {
          a {
            color: var(--flickr-pink);
          }
        }
      }
    }
    .nav-icon {
      color: var(--flickr-pink);
      &:hover {
        color: var(--byzantine);
      }
    }
    .sidebar-social {
      justify-self: center;
      li {
        padding: 0.1rem 0.525rem 0.1rem 0rem;
      }
      svg {
        color: var(--light-black);
        transition: var(--transition);
        &:hover {
          color: var(--flickr-pink);
          margin-bottom: 0.12rem;
        }
      }
    }
  }
`;

export default Sidebar;
