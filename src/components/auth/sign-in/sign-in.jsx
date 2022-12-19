import React from "react";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";
import {
  Col,
  Title,
  Desc,
  Form,
  SigninContainer,
  ButtonsBarContainer,
  ButtonC,
  PasswordExtra,
  ForgetPassword,
  ShowIcon,
  HideIcon,
  SignUpRedirect,
  Span,
  Other,
  Hr,
  Option,
  GoogleButton,
  Google,
  Facebook,
} from "./sign-in.styles.jsx";

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showPassword: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <SigninContainer>
        <Col>
          <Form onSubmit={this.handleSubmit}>
            <Title>sign in</Title>
            <Desc>input your credentials to get access</Desc>
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email Address"
              required
            />
            <FormInput
              type={this.state.showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
              required
            />

            <div
              onClick={() =>
                this.setState({ showPassword: !this.state.showPassword })
              }
            >
              {this.state.showPassword ? <ShowIcon /> : <HideIcon />}
            </div>

            <PasswordExtra>
              <ForgetPassword>Forget Password?</ForgetPassword>
              <SignUpRedirect>
                No account yet? <Span to="/signup">sign up</Span>
              </SignUpRedirect>
            </PasswordExtra>

            <ButtonsBarContainer>
              <ButtonC type="submit">Sign In</ButtonC>
              {/* <ButtonC onClick={signInWithGoogle} isGoogleSignIn>
                  {" "}
                  sign in with google{" "}
                </ButtonC> */}
            </ButtonsBarContainer>
            <Other>
              <Hr />
              <Option>or sign in with</Option>
              <Hr />
            </Other>
            <GoogleButton>
              <Google onClick={signInWithGoogle}>&#5056;</Google>
              <Facebook>&#102;</Facebook>
            </GoogleButton>
          </Form>
        </Col>
      </SigninContainer>
    );
  }
}

export default SignInComponent;
