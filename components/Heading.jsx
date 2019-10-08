import React from "react";

import { withTheme } from "./withTheme";

function Heading({ children, theme }) {
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

          font-family: ${theme.typography.fontFamily};
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

export default withTheme(Heading);
