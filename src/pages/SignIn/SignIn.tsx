import { logo } from "@images/common";
import { Link } from "react-router-dom";
import { Title1 } from "~/constants/Typography";
import * as Styled from "./SignIn.style";

const SignIn = () => {
  return (
    <Styled.Container as="main" direction="column">
      <img src={logo} alt="logo" />

      <Title1>츠누봇 관리자 페이지</Title1>
      <Link to="/main" type="button">
        메인 페이지가기
      </Link>
    </Styled.Container>
  );
};

export default SignIn;
