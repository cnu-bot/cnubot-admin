import { logo } from "@images/common";
import { useInput } from "~/hooks";
import * as Styled from "./SignIn.style";

const SignIn = () => {
  const { inputProps: idInput, resetValue: resetIdInput } = useInput({
    type: "text",
    defValue: ""
  });
  const { inputProps: pwInput, resetValue: resetPwInput } = useInput({
    type: "password",
    defValue: ""
  });
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`${idInput.value}, ${pwInput.value} 입니다.`);
    resetIdInput();
    resetPwInput();
  };

  return (
    <Styled.Container as="main" direction="column">
      <img src={logo} alt="logo" />
      <Styled.SignInForm onSubmit={submitHandler}>
        <Styled.InputBox>
          <Styled.SignInLabel> 아이디 </Styled.SignInLabel>
          <Styled.SignInInput placeholder="아이디" {...idInput} required />
        </Styled.InputBox>
        <Styled.InputBox>
          <Styled.SignInLabel> 비밀번호 </Styled.SignInLabel>
          <Styled.SignInInput placeholder="비밀번호" {...pwInput} required />
        </Styled.InputBox>
        <Styled.LoginButton type="submit">로그인</Styled.LoginButton>
      </Styled.SignInForm>
    </Styled.Container>
  );
};

export default SignIn;
