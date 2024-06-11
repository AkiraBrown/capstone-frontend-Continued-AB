import { useEffect, useState } from "react";
import { signupSession } from "../../API/API";
import { IoIosWarning } from "react-icons/io";
import {
  InputCheck,
  EmailCheck,
  PasswordCheck,
  UsernameCheck,
  DobCheck,
} from "../../common/hooks/validation";
import useAuthHooks from "../../common/hooks/Auth/useAuthHooks";
import { useNavigate } from "react-router-dom";
function SignupPage() {
  const navigate = useNavigate();
  const [checkToken] = useAuthHooks();
  const [userImageLink, setUserImageLink] = useState("");

  // //Validations
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

  useEffect(() => {
    if (checkToken()) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, []);

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formatObj = {
      first_name,
      last_name,
      dob,
      email,
      password,
      user_picture: userImageLink,
      user_name: usernameInput,
    };
    try {
      const result = await signupSession(formatObj);
      if (result.user_name) {
        navigate("/login");
      }
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      usernameOnChange("");
      handleDobChange("");
    } catch (error) {
      if (import.meta.env.Dev) console.log(error);
    }
  }
  return (
    <form
      className="form-floating w-50 row g-3 align-items-center mx-auto p-5"
      onSubmit={handleOnSubmit}
    >
      <h3 className="fw-normal text-center p-5">Create an account</h3>
      <div className="col-md-12 input-group has-validation">
        <label
          htmlFor="inputFirstName"
          className="input-group-text"
          id="labelInputFirstName"
        >
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          placeholder="First Name"
          required
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          onFocus={() => setFirstNameOnFocus(true)}
          onBlur={() => setFirstNameOnBlur(true)}
        />
      </div>
      <div className="col-md-12 text-center text-danger">
        {firstNameError && (
          <span className="invalid-feeback " id="inputFirstNameFeedback">
            <IoIosWarning /> {firstNameError}
          </span>
        )}
      </div>
      <div className="col-md-12 input-group">
        <label htmlFor="inputLastName" className="input-group-text">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputLastName"
          placeholder="Last Name"
          required
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          onFocus={() => setLastNameOnFocus(true)}
          onBlur={() => setLastNameOnBlur(true)}
        />
      </div>
      <div className="col-md-12 text-center text-danger">
        {lastNameError && (
          <span className="invalid-feeback">
            <IoIosWarning />
            {lastNameError}
          </span>
        )}
      </div>
      <div className="col-md-12 input-group">
        <label htmlFor="dobInput" className="input-group-text">
          Date Of Birth
        </label>
        <input
          type="date"
          className="form-control"
          id="dobInput"
          value={dob}
          onChange={(e) => handleDobChange(e.target.value)}
          onFocus={() => setDobFocus(true)}
          onBlur={() => setDobBlur(true)}
        />
      </div>
      <div className="col-md-12 text-center text-danger">
        {dobError && <span className="invalid-feeback">{dobError}</span>}
      </div>
      <div className="col-md-12 input-group">
        <label htmlFor="imageLink" className="input-group-text">
          Picture
        </label>
        <input
          type="text"
          className="form-control"
          id="imageLink"
          onChange={(e) => setUserImageLink(e.target.value)}
          required
          placeholder="Picture"
          value={userImageLink}
        />
      </div>
      <div className="col-md-12 input-group">
        <label htmlFor="inputUsername" className="input-group-text">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="inputUsername"
          placeholder="Username"
          required
          value={usernameInput}
          onChange={(e) => usernameOnChange(e.target.value)}
          onFocus={() => setUsernameOnFocus(true)}
          onBlur={() => setUsernameOnBlur(true)}
        />
      </div>
      <div className="col-md-12 text-center text-danger">
        {usernameError && (
          <span className="invalid-feeback">
            <IoIosWarning />
            {usernameError}
          </span>
        )}
      </div>
      <div className="col-md-12 input-group">
        <label htmlFor="inputEmail" className="input-group-text">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEmail"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailOnFocus(true)}
          onBlur={() => setEmailOnBlur(true)}
        />
      </div>
      <div className="col-md-12 text-center text-danger">
        {emailError && (
          <span className="invalid-feeback">
            <IoIosWarning />
            {emailError}
          </span>
        )}
      </div>
      <div className="col-md-12 input-group">
        <label htmlFor="" className="input-group-text">
          Password
        </label>
        <input
          type={import.meta.env.DEV ? "text" : "password"}
          className="form-control"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordOnFocus(true)}
          onBlur={() => setPasswordOnBlur(true)}
        />
      </div>
      <div className="col-md-12 text-center text-danger">
        {passwordError && (
          <span className="invalid-feeback">
            <IoIosWarning />
            {passwordError}
          </span>
        )}
      </div>
      <div className="col-md-12 input-group">
        <label htmlFor="" className="input-group-text">
          Confirm Password
        </label>
        <input
          type={import.meta.env.DEV ? "text" : "password"}
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <div className="col-12 text-center">
        <button
          className="btn btn-primary"
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
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignupPage;
