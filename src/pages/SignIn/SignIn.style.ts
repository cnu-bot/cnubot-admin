import styled from "styled-components";
import { FlexCenter } from "~/constants/Common.style";
import { media } from "~/constants/Media";
import { Text } from "~/constants/Typography";
import Colors from "~/constants/Colors";
import { EXTRA_BOLD_WEIGHT } from "~/constants/Variables";
import { pxToRem } from "~/constants/Size";

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
  margin-top: 0.75em;
`;
// font-size: ${pxToRem(30}; global.style.ts 수정후에도 적용이 되지 않습니다.
export const SignInLabel = styled(Text)`
  grid-row: 1;
  font-size: ${pxToRem(30)};
  font-weight: ${EXTRA_BOLD_WEIGHT};
  color: ${Colors.gray83};
`;

export const SignInInput = styled.input`
  border: 1px solid ${Colors.grayAF};
  border-radius: ${pxToRem(4)};
  padding: 0 ${pxToRem(65)} 0 ${pxToRem(5)};
  margin-top: 0.2rem;
  width: 100%;
  height: ${pxToRem(35)};
  outline: none;
  ::placeholder {
    color: ${Colors.grayC3};
    size: ${pxToRem(28)};
  }
`;

export const LoginButton = styled.button`
  top: 0;
  right: 0;
  border: none;
  border-radius: ${pxToRem(5)};
  width: 100%;
  height: ${pxToRem(35)};
  margin-top: 0.75rem;
  background-color: ${Colors.SouthernBlue};
  color: #fff;
  font-size: ${pxToRem(32)};
`;
