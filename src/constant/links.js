import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { TweenLite } from "gsap/all";

const leftExit = (exit, node) => {
  TweenLite.to(node, { opacity: 0, x: "-100vw" });
};

const rigthEntry = (entry, node) => {
  TweenLite.from(node, { x: "100vw", opacity: 0 });
};

const topExit = (exit, node) => {
  TweenLite.to(node, { opacity: 0, y: "-100vh" });
};

const bottomEntry = (entry, node) => {
  TweenLite.from(node, { y: "100vh", opacity: 0 });
};

const Links = ({ styleClass, closeSidebar, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <AniLink
          paintDrip
          hex=" #fcb9d7"
          to="/"
          className="page-link"
          onClick={closeSidebar}
        >
          Home
        </AniLink>
      </li>
      <li className="nested-link">
        <TransitionLink
          to="/posts"
          className="page-link"
          onClick={closeSidebar}
          exit={{
            trigger: ({ exit, node }) => leftExit(exit, node),
            length: 0.5,
          }}
          entry={{
            trigger: ({ entry, node }) => rigthEntry(entry, node),
            delay: 0,
          }}
        >
          Posts
        </TransitionLink>
      </li>
      {children}
      <li>
        <TransitionLink
          onClick={closeSidebar}
          to="/newsletter"
          className="page-link"
          exit={{
            trigger: ({ exit, node }) => topExit(exit, node),
            length: 0.5,
          }}
          entry={{
            trigger: ({ entry, node }) => bottomEntry(entry, node),
            delay: 0,
          }}
        >
          Newsletter
        </TransitionLink>
      </li>
      <li>
        <TransitionLink
          to="/post"
          className="page-link"
          onClick={closeSidebar}
          exit={{
            trigger: ({ exit, node }) => leftExit(exit, node),
            length: 0.5,
          }}
          entry={{
            trigger: ({ entry, node }) => rigthEntry(entry, node),
            delay: 0,
          }}
        >
          Post
        </TransitionLink>
      </li>
    </ul>
  );
};

export default Links;
