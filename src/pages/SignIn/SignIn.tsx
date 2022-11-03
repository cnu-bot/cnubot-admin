import { logo } from "@images/common";
// import { Link } from "react-router-dom";
import { useState } from "react";
import * as Styled from "./SignIn.style";

const SignIn = () => {
  const [adminId, setAdminId] = useState("");
  const [adminPw, setAdminPw] = useState("");

  return (
    <Styled.Container as="main" direction="column">
      <img src={logo} alt="logo" />
      <Styled.SignInBody>
        <Styled.InputBox>
          <Styled.SignInLabel> 아이디 </Styled.SignInLabel>
          <Styled.SignInInput
            type="text"
            placeholder="아이디"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAdminId(e.target.value);
            }}
          />
        </Styled.InputBox>
        <Styled.InputBox>
          <Styled.SignInLabel> 비밀번호 </Styled.SignInLabel>
          <Styled.SignInInput
            type="text"
            placeholder="비밀번호"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAdminPw(e.target.value);
            }}
          />
        </Styled.InputBox>
        <Styled.LoginButton
          onClick={() => {
            // 구현 필요 서버에 보내서 아이디 체크
            alert(adminId + adminPw);
          }}
        >
          로그인
        </Styled.LoginButton>
      </Styled.SignInBody>
    </Styled.Container>
  );
};

export default SignIn;
