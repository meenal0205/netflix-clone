import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signin}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen_gray">New to Netflix?</span>
          <span className="signUpScreen_link" onClick={register}>
            {" "}
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
