import React, { useState } from "react";
import client from "../../utils/client";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import "../../styles/LoginForm.css";

const UserForm = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoginForm, setIsLoginForm] = useState(true);
  const { updateUserId } = useUser();
  const user = {
    username: formData.username,
    password: formData.password,
  };

  // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const passwordsMatch = formData.password === confirmPassword;

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoginForm) {
      login();
    } else if (passwordRegex.test(formData.password) && passwordsMatch) {
      await registerUser();
      login();
    }
  };

  const registerUser = async () => {
    try {
      await client.post("/user", user);
    } catch (e) {
      console.error(e);
    }
  };

  const login = async () => {
    try {
      const res = await client.post("/login", user);

      localStorage.setItem(process.env.REACT_APP_USER_TOKEN, res.data.token);
      updateUserId(res.data.user.id);
    } catch (e) {
      console.error(e);
    }
    navigate("../create-workout", { replace: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>{isLoginForm ? "Login" : "Register"}</h2>

        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={formData.username}
          name="username"
          onChange={handleChange}
        />

        <input
          required
          className="login-input"
          type="password"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />

        {!isLoginForm && (
          <input
            required
            className={
              passwordsMatch ? "login-input" : "login-input login-input__wrong"
            }
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
        )}

        <button type="submit" className="login-button">
          {isLoginForm ? "Login" : "Register"}
        </button>

        <div>
          {isLoginForm && (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setIsLoginForm(!isLoginForm)}>Sign up</span>
            </p>
          )}

          {!isLoginForm && (
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsLoginForm(!isLoginForm)}>Sign in</span>
            </p>
          )}
        </div>

        <div className="login-warning-msg">
          {!isLoginForm && !passwordsMatch && "¡ Passwords do not match !"}
        </div>

        <div className="login-password-info">
          {!isLoginForm && (
            <>
              <h3>Your password must:</h3>

              <ul>
                <li>
                  <div>
                    {/(?=.*?[A-Z])/.test(formData.password) ? "✅" : "❌"}
                  </div>
                  Include at least one uppercase letter
                </li>

                <li>
                  <div>
                    {/(?=.*?[a-z])/.test(formData.password) ? "✅" : "❌"}
                  </div>
                  Include at least one lowercase letter
                </li>

                <li>
                  <div>
                    {/(?=.*?[0-9])/.test(formData.password) ? "✅" : "❌"}
                  </div>
                  Include at least one number
                </li>

                <li>
                  <div>
                    {/(?=.*?[#?!@$%^&*-])/.test(formData.password)
                      ? "✅"
                      : "❌"}
                  </div>
                  Include at least one special character
                </li>

                <li>
                  <div>{/.{8,}/.test(formData.password) ? "✅" : "❌"}</div>
                  Be at least 8 characters long
                </li>
              </ul>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default UserForm;
