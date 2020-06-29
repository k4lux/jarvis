import React from "react";
import { Helmet } from "react-helmet";

import GlobalStyle from "styles/GlobalStyle";

interface Props {
  children: React.ReactElement;
  title?: string;
  description?: string;
}

export default function Base({ children, title, description }: Props) {
  return (
    <>
      <Helmet>
        <title>{title ? `Jarvis - ${title}` : `Jarvis`}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      {children}
    </>
  );
}
