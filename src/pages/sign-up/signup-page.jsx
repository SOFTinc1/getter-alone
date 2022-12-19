import SignUpComponent from "../../components/auth/sign-up/sign-up";
import GetterHeader from "../../components/Getter/header-getter/getter-header.component";
import { SignUpContainer, SignUpTextContainer, SignUpTittle, SignUpSpan} from './signup-page.styles';



const SignUpPage = () => (
  <SignUpContainer>
    <GetterHeader />

    <SignUpTextContainer>
      <SignUpTittle>Create an account</SignUpTittle>
    </SignUpTextContainer>
    <SignUpSpan>Kindly register to gain access to the platform</SignUpSpan>

    <SignUpComponent />
  </SignUpContainer>
);

export default SignUpPage;