import React from "react";

import { Container } from "./styles";

interface Props {
  name: string;
}

export default function Icon({ name }: Props) {
  return <Container>{name}</Container>;
}
