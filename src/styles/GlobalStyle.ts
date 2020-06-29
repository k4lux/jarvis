import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { FONT_FAMILY } from "./variables/typography";
import { COLOR_WHITE, COLOR_BLUECHARCOAL } from "./variables/colors";

export default createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${FONT_FAMILY};
    color: ${COLOR_WHITE};
    background: ${COLOR_BLUECHARCOAL};
  }
`;
