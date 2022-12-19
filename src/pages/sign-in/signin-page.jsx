import SignInComponent from "../../components/auth/sign-in/sign-in";
import GetterHeader from "../../components/Getter/header-getter/getter-header.component";
import {
  SignInContainer,
  LoginTextContainer,
  SignInTittle,
  SignInSpan,
} from "./signin-page.styles";

const SignInPage = () => (
  <SignInContainer>

     <GetterHeader />

    <LoginTextContainer>
      <SignInTittle>Login</SignInTittle>
    </LoginTextContainer>
    <SignInSpan>
      Kindly input your login details to gain access to the platform
    </SignInSpan>
    
    <SignInComponent />
  </SignInContainer>
);

export default SignInPage;
