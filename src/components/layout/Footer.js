import React from "react";
import styled from "styled-components";
import SocialLinks from "../../constant/socialLinks";

const Footer = () => {
  return (
    <Wrapper>
      <div className="section-center footer">
        <h4>
          All Rights Reserved to <span>MDX</span> BLOG
        </h4>
        <SocialLinks styleClass="row-social sidebar-social" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--color-black);
  .footer {
    place-items: center;
    gap: 0.2rem;
    h4 {
      color: var(--color-grey-1);
      font-weight: 700;
      font-variant: small-caps;
      text-transform: lowercase;
      font-size: 1.5em;
      span {
        color: var(--flickr-pink);
      }
    }
    .sidebar-social {
      justify-self: center;
      li {
        padding: 0.1rem 0.525rem 0.1rem 0rem;
      }
      svg {
        color: var(--flickr-pink);
        transition: var(--transition);
        &:hover {
          color: var(--flickr-pink);
          margin-bottom: 0.12rem;
        }
      }
    }
  }
`;
export default Footer;
