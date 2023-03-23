import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Alert, FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //Global State and useNavigate
  const { isLoading, showAlert, displayAlert } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
    }
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values?.isMember });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{showAlert ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* Name Input */}
        {!values?.isMember && (
          <FormRow
            type="text"
            name="name"
            handleChange={handleChange}
            value={values.name}
          />
        )}
        {/* Email Input */}
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
        />
        {/* Password Input */}
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values?.isMember ? "Not a member ?" : "Already a Member"}
          <button onClick={toggleMember} className="member-btn" type="button">
            {values?.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
