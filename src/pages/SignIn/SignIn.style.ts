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

export const SignInBody = styled.div`
  width: 50%;
`;

export const InputBox = styled.div`
  margin-top: 0.75em;
`;

export const SignInLabel = styled.text`
  grid-row: 1;
  font-size: 0.75rem;
  font-weight: 600;
  color: #838383;
`;

export const SignInInput = styled.input`
  border: 1px solid #afafaf;
  border-radius: 5px;
  padding: 0 65px 0 5px;
  margin-top: 0.2rem;
  width: 100%;
  height: 35px;
  outline: none;
  ::placeholder {
    color: #c3c3c3;
    size: 0.75rem;
  }
`;

export const LoginButton = styled.button`
  top: 0;
  right: 0;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  margin-top: 0.75rem;
  background-color: #001e75;
  color: #fff;
  font-size: 0.75rem;
`;
