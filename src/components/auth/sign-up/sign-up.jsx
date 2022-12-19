import React from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../../button/button";
import {
  auth,
  createUserProfileDocument,
} from "../../../firebase/firebase.utils";
import {
  SignupContainer,
  Col,
  Form,
  Title,
  Desc,
  ShowIcon,
  HideIcon,
  ButtonsBarContainer,
  ButtonC,
  PasswordExtra,
  SignUpRedirect,
  Span,
} from "./sign-up.styles";

class SignUpComponent extends React.Component {
  state = { displayName: "", email: "", password: "" };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
    });
  };

  render() {
    const { displayName, email, password } = this.state;

    return (
      <SignupContainer>
        <Col>
          <Form className="sign-up-form" onSubmit={this.handleSubmit}>
            <Title>sign up</Title>
            <Desc>register with us and get access</Desc>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              label="Name"
              required
            />
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
              <SignUpRedirect>
                already got an account? goto <Span to="/signin">sign in</Span>
              </SignUpRedirect>
            </PasswordExtra>

            <ButtonsBarContainer>
              <ButtonC type="submit">Sign Up</ButtonC>
            </ButtonsBarContainer>
          </Form>
        </Col>
      </SignupContainer>
    );
  }
}

export default SignUpComponent;
