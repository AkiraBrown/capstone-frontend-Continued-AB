import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoIosWarning } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignupPage.scss";
import {
  InputCheck,
  EmailCheck,
  PasswordCheck,
  UsernameCheck,
  DobCheck,
} from "../../hooks/validation";
import { signupSession } from "../../API/API";

import useAuthHooks from "../../hooks/auth/useAuthHooks";
function SignupPage() {
  const [checkToken] = useAuthHooks();
  const [userImageLink, setUserImageLink] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (checkToken()) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, []);
  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      // user_picture is needed before we can test signup
      const format = {
        first_name,
        last_name,
        dob,
        email,
        password,
        user_picture: userImageLink,
        user_name: usernameInput,
      };
      const result = await signupSession(format);
      console.log(result);
      navigate("/login");
      toast.success("Account Created Successfully", toast.POSITION.TOP_CENTER);
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.log(error);
      toast.error("User not found", toast.POSITION.TOP_CENTER);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      usernameOnChange("");
      handleDobChange("");
    }
  }

  const [
    first_name,
    setFirstName,
    firstNameError,
    setFirstNameOnFocus,
    setFirstNameOnBlur,
    inputFirstNameButtonState,
  ] = InputCheck("First Name");
  const [
    last_name,
    setLastName,
    lastNameError,
    setLastNameOnFocus,
    setLastNameOnBlur,
    inputLastNameButtonState,
  ] = InputCheck("Last Name");
  const [
    email,
    setEmail,
    emailError,
    setEmailOnFocus,
    setEmailOnBlur,
    emailButtonState,
  ] = EmailCheck();
  const [
    password,
    setPassword,
    passwordError,
    setPasswordOnFocus,
    setPasswordOnBlur,
    confirmPassword,
    setConfirmPassword,
    passwordButtonState,
  ] = PasswordCheck();
  const [
    usernameInput,
    usernameOnChange,
    usernameError,
    setUsernameOnFocus,
    setUsernameOnBlur,
    usernameButtonState,
  ] = UsernameCheck();

  const [
    dob,
    handleDobChange,
    dobError,
    setDobFocus,
    setDobBlur,
    dobButtonState,
  ] = DobCheck();

  return (
    <div className="signup">
      <form className="signup__form" onSubmit={handleOnSubmit}>
        <span className="signup__form__title">Sign Up</span>
        <span className="signup__form__subtitle">
          Create an account with your email
        </span>
        <div className="signup__form__error-container">
          {firstNameError && (
            <span className="signup__form__error-container__error">
              <IoIosWarning />
              {firstNameError}
            </span>
          )}
          {lastNameError && (
            <span className="signup__form__error-container__error">
              <IoIosWarning />
              {lastNameError}
            </span>
          )}
          {usernameError && (
            <span className="signup__form__error-container__error">
              <IoIosWarning />

              {usernameError}
            </span>
          )}
          {emailError && (
            <span className="signup__form__error-container__error">
              <IoIosWarning />
              {emailError}
            </span>
          )}
          {passwordError && (
            <span className="signup__form__error-container__error">
              <IoIosWarning />
              {passwordError}
            </span>
          )}
          {dobError && (
            <span className="signup__form__error-container__error">
              <IoIosWarning />
              {dobError}
            </span>
          )}
        </div>
        <div className="signup__form__container">
          <div className="signup__form__container__input-group">
            <input
              type="text"
              className="signup__form__container__input-group__input"
              id="first_name"
              placeholder="First Name"
              required
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              onFocus={() => setFirstNameOnFocus(true)}
              onBlur={() => setFirstNameOnBlur(true)}
            />
          </div>
          <div className="signup__form__container__input-group">
            <input
              type="text"
              className="signup__form__container__input-group__input"
              id="last_name"
              required
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={() => setLastNameOnFocus(true)}
              onBlur={() => setLastNameOnBlur(true)}
            />
          </div>
          <div className="signup__form__container__input-group">
            <input
              type="text"
              className="signup__form__container__input-group__input"
              id="user_picture"
              value={userImageLink}
              onChange={(e) => setUserImageLink(e.target.value)}
              required
              placeholder="Picture Link"
            />
          </div>
          <div className="signup__form__container__input-group">
            <input
              type="email"
              className="signup__form__container__input-group__input"
              id="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailOnFocus(true)}
              onBlur={() => setEmailOnBlur(true)}
            />
          </div>
          <div className="signup__form__container__input-group">
            <input
              type="text"
              className="signup__form__container__input-group__input"
              id="user_name"
              required
              placeholder="Username"
              value={usernameInput}
              onChange={(e) => usernameOnChange(e.target.value)}
              onFocus={() => setUsernameOnFocus(true)}
              onBlur={() => setUsernameOnBlur(true)}
            />
          </div>

          <div className="signup__form__container__input-group">
            <input
              type={
                process.env.NODE_ENV === "development" ? "text" : "password"
              }
              required
              className="signup__form__container__input-group__input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordOnFocus(true)}
              onBlur={() => setPasswordOnBlur(true)}
            />
          </div>
          <div className="signup__form__container__input-group">
            <input
              type={
                process.env.NODE_ENV === "development" ? "text" : "password"
              }
              required
              className="signup__form__container__input-group__input"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="signup__form__container__input-group__dob-group">
            <label className="signup__form__container__input-group__dob-group__label">
              D.O.B:
            </label>
            <input
              type="date"
              id="dob"
              required
              placeholder="Date Of Birth"
              className="signup__form__container__input-group__dob-group__input"
              value={dob}
              onChange={(e) => handleDobChange(e.target.value)}
              onFocus={() => setDobFocus(true)}
              onBlur={() => setDobBlur(true)}
            />
          </div>
        </div>
        <button
          className="signup__form__container__submitBtn"
          type="submit"
          disabled={
            dobButtonState ||
            emailButtonState ||
            inputFirstNameButtonState ||
            inputLastNameButtonState ||
            passwordButtonState ||
            usernameButtonState
          }
        >
          Sign Up
        </button>
        <div className="signup__form__container__redirect">
          <p>
            Have an account? <NavLink to={"/login"}>Log in</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
