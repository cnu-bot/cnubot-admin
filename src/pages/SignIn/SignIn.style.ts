import styled from "styled-components";
import { FlexCenter } from "~/constants/Common.style";
import { media } from "~/constants/Media";
import { Text } from "~/constants/Typography";
import Colors from "~/constants/Colors";
import { pxToRem } from "~/constants/Size";
import { EXTRA_BOLD_WEIGHT } from "~/constants/Variables";

export const Container = styled(FlexCenter)`
  height: 100vh;
  margin: 0 auto;

  ${media.tablet} {
    width: 100%;
    padding: ${pxToRem(20)};
  }
`;

export const SignInForm = styled.form`
  width: 50%;
`;

export const InputBox = styled.div`
  margin-top: ${pxToRem(12)};
`;

export const SignInLabel = styled(Text).attrs({
  size: pxToRem(30),
  weight: EXTRA_BOLD_WEIGHT,
  color: Colors.gray83
})``;

export const SignInInput = styled.input`
  border: 1px solid ${Colors.grayAF};
  border-radius: ${pxToRem(4)};
  padding: 0 ${pxToRem(65)} 0 ${pxToRem(5)};
  margin-top: ${pxToRem(3.2)};
  width: 100%;
  height: ${pxToRem(35)};
  ::placeholder {
    color: ${Colors.grayC3};
    size: ${pxToRem(28)};
  }
`;

export const LoginButton = styled.button`
  border-radius: ${pxToRem(5)};
  width: 100%;
  height: ${pxToRem(35)};
  margin-top: ${pxToRem(12)};
  background-color: ${Colors.SouthernBlue};
  color: ${Colors.white};
  font-size: ${pxToRem(32)};
`;
