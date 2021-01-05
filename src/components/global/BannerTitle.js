import React from "react";
import styled from "styled-components";

const BannerTitle = ({ title }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <div className="line"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: var(--purple);
  font-variant: small-caps;
  font-weight: 700;
  position: relative;
  text-align: center;
  h4 {
    text-transform: uppercase;
    font-weight: 700;
    background: var(--clr-white);
    display: inline-block;
    margin-bottom: 0;
    padding: 0 0.6rem;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 25%;
      height: 1.5px;
      transform: translateY(-45%);
      background: var(--purple);
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      width: 25%;
      height: 1.5px;
      transform: translateY(-45%);
      background: var(--purple);
      z-index: 1;
    }
  }
`;
export default BannerTitle;
