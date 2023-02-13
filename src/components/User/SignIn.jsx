import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { users, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const [logInInputs, setLogInInputs] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedInUser = users.find(
      (user) =>
        user.userName === logInInputs.userName &&
        user.password === logInInputs.password
    );

    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
      navigate("/");
    } else {
      setErrorMessage("Invalid UserName or password");
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <h1>Sign In</h1>
          <div className="label-wrapper">
            <label>
              User Name:
              <br />
              <input
                type="text"
                value={logInInputs.userName}
                onChange={(e) =>
                  setLogInInputs({ ...logInInputs, userName: e.target.value })
                }
              />
            </label>
            <label>
              Password:
              <br />
              <input
                type="password"
                value={logInInputs.password}
                onChange={(e) =>
                  setLogInInputs({ ...logInInputs, password: e.target.value })
                }
              />
            </label>
          </div>
          <input type="submit" value="Log In"></input>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </>
  );
};

export default SignIn;
