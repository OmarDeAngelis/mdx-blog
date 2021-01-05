import React from "react";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import { Link } from "gatsby";
import Example from "./src/components/global/Example";

const Counter = () => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value + 1);
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h3> {value}</h3>
      <button
        style={{
          background: "var(--dodger-blue)",
          borderRadius: "16px",
          padding: "0.2rem 0.8rem",
          color: "white",
        }}
        onClick={() => setValue(0)}
      >
        {" "}
        Reset{" "}
      </button>
    </div>
  );
};

const myH1 = (props) => {
  if (props.title) {
    return (
      <Wrapper>
        <h3>{props.children}</h3>
        <div className="underline"></div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <h3>{props.children}</h3>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  display: grid;
  gap: 1rem;
  place-items: center;
  .underline {
    height: 6px;
    background-color: var(--flickr-pink);
    width: 100px;
    border-radius: 6px;
  }
`;

const MDXLink = (props) => {
  if (props.internalLink) {
    return (
      <LinkWrapper to={props.url} className="btn">
        {props.children}
      </LinkWrapper>
    );
  } else {
    return <a href={props.url}>{props.children}</a>;
  }
};

const LinkWrapper = styled(Link)`
  width: fit-content;
`;

const components = {
  h1: myH1,
  Counter,
  MDXLink,
  pre: Example,
};

export const MDXall = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
