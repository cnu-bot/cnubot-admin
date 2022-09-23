import styled from "styled-components";
import { FlexCenter } from "~/constants/Common.style";
import { media } from "~/constants/Media";

export const Container = styled(FlexCenter)`
  height: 100vh;
  margin: 0 auto;

  ${media.tablet} {
    width: 100%;
    padding: 20px;
  }
`;
