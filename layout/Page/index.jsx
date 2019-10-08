import React from "react";

import { MDXProvider } from "@mdx-js/react";

function Heading({ children }) {
  return (
    <>
      <h1>{children}</h1>

      <style jsx>{`
        h1 {
          display: flex;
          flex-direction: column;
          font-size: 2em;
          letter-spacing: 1px;
          margin: 1em 0;

          font-family: monospace;
          text-transform: uppercase;
        }

        h1::after {
          content: "---";
          line-height: 0.5em;
        }
      `}</style>
    </>
  );
}

function Text({ children }) {
  return (
    <>
      <p>{children}</p>

      <style jsx>{`
        p {
          font-family: monospace;
        }
      `}</style>
    </>
  );
}

function Bullets({ children }) {
  return (
    <>
      <ul>{children}</ul>

      <style jsx>{`
        ul {
          margin: 1em 0;

          list-style-type: none;
        }

        ul ul {
          margin: 0.5em 0 0.5em 1.5em;
        }
      `}</style>
    </>
  );
}

function Bullet({ children }) {
  return (
    <>
      <li>{children}</li>

      <style jsx>{`
        li {
          overflow-wrap: break-word;

          font-family: monospace;
        }

        li:not(:first-of-type) {
          margin-top: 0.5em;
        }

        li::before {
          content: "*";
          margin-right: 0.5em;
        }
      `}</style>
    </>
  );
}

export function Page({ children }) {
  return (
    <MDXProvider
      components={{
        h1: Heading,
        p: Text,
        ul: Bullets,
        li: Bullet
      }}
    >
      {children}
    </MDXProvider>
  );
}
