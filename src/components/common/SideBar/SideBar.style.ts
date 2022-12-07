import styled from "styled-components";
import { pxToRem } from "~/constants/Size";
import Colors from "~/constants/Colors";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: ${pxToRem(60)};
  bottom: 0;
  z-index: 10;
  background-color: ${Colors.white};
  border-right: 1px solid ${Colors.grayAF};
  width: ${pxToRem(200)};
`;

export const ListItem = styled.li`
  height: ${pxToRem(52)};
  padding-top: ${pxToRem(16)};
  padding-bottom: ${pxToRem(16)};
  padding-left: ${pxToRem(12)};
  font-size: ${pxToRem(20)};
  color: ${Colors.gray83};
  &:hover {
    color: ${Colors.winterSea};
    background-color: ${Colors.foggyWinterSea};
  }
`;
