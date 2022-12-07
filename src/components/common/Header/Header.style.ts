import styled from "styled-components";
import Colors from "~/constants/Colors";
import { pxToRem } from "~/constants/Size";
import { Text } from "~/constants/Typography";
import { BOLD_WEIGHT } from "~/constants/Variables";

export const Container = styled.div``;

export const Nav = styled.nav`
  background-color: ${Colors.southernBlue};
  border: 1px solid blue;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: ${pxToRem(60)};
  display: flex;
  align-items: center;
  padding-left: ${pxToRem(12)};
`;

export const Title = styled(Text).attrs({
  color: Colors.white,
  weight: BOLD_WEIGHT
})`
  font-size: ${pxToRem(20)};
`;
