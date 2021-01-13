import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./../Firebase/firebase";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Title,
  Form,
  Label,
  InputField,
  Button,
  SignUpTitle,
} from "./SignUp.styled";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <>
      <Wrapper>
        <Title>Sign up</Title>
        <Form onSubmit={handleSignUp}>
          <Label>
            Email
            <InputField name="email" type="email" placeholder="Email" />
          </Label>
          <Label>
            Password
            <InputField
              name="password"
              type="password"
              placeholder="Password"
            />
          </Label>
          <Button type="submit">Sign Up</Button>
        </Form>
        <Link to="/login">
          <SignUpTitle>Sign In</SignUpTitle>
        </Link>
      </Wrapper>
    </>
  );
};

export default withRouter(SignUp);
