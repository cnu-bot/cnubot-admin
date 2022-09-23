import { CSSProperties } from "react";
import styled from "styled-components";
import { media } from "./Media";
import { pxToRem } from "./Size";

export const SizedBox = styled.div<{
  height?: number;
  width?: number;
  moWidth?: number;
  moHeight?: number;
}>`
  ${({ height }) => height && `height: ${pxToRem(height)};`}
  ${({ width }) => width && `width: ${pxToRem(width)};`}

  ${media.laptop} {
    ${({ moWidth }) => moWidth !== undefined && `width: ${pxToRem(moWidth)};`}
    ${({ moHeight }) =>
      moHeight !== undefined && `height: ${pxToRem(moHeight)};`}
  }
`;

export const FlexBox = styled.div<{
  direction?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  gap?: number;
  bgColor?: string;
  position?: CSSProperties["position"];
  moGap?: number;
  shadow?: {
    value: string;
    borderRadius: number;
  };
  marginTop?: number;
}>`
  position: ${({ position }) => position || "static"};
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  ${({ gap }) => gap !== undefined && `gap: ${pxToRem(gap)};`}

  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ marginTop }) => marginTop && `margin-top: ${pxToRem(marginTop)};`}

  ${media.laptop} {
    ${({ moGap }) => moGap !== undefined && `gap: ${pxToRem(moGap)};`}
  }
  box-shadow: ${({ shadow }) => shadow && shadow.value};
  border-radius: ${({ shadow }) => shadow && `${shadow.borderRadius}px`};
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;
