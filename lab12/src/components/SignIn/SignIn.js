import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./../Firebase/firebase";
import { AuthContext } from "./../Firebase/Auth";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Title,
  Form,
  Label,
  InputField,
  Button,
  SignUpTitle,
} from "./SignIn.styled";

const SignIn = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const handleSignIn = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  if (currentUser && currentUser.emailVerified == true) {
    return <Redirect to="/" />;
  }
  console.log(currentUser);
  return (
    <>
      <Wrapper>
        <Title>Log in</Title>
        <Form onSubmit={handleSignIn}>
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
          <Button type="submit">Sign in</Button>
        </Form>

        <Link to="/regestration">
          <SignUpTitle>Sign Up</SignUpTitle>
        </Link>
      </Wrapper>
    </>
  );
};

export default withRouter(SignIn);
