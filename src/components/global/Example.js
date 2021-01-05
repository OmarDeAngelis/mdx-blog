import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import styled from "styled-components";

const Example = (props) => {
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language="jsx"
      className="code-block"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Wrapper>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </Wrapper>
      )}
    </Highlight>
  );
};

const Wrapper = styled.article`
  position: relative;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Example;
