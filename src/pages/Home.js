import React from "react";

import Base from "components/templates/Base";
import Icon from "components/atoms/Icon";

const DESCRIPTION =
  "A set of tools to ease the daily work of our fellow frontend developer";

export default function Home() {
  return (
    <Base title="Home" description={DESCRIPTION}>
      <h1>Jarvis</h1>
      <p>{DESCRIPTION}</p>
      <Icon name="face" />
    </Base>
  );
}
