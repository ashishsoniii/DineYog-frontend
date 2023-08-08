import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import profileImage from "../../assets/profile/c.jpg";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    axios
      .post(
        "http://127.0.0.1:5000/login",
        // "https://yoglabs.pythonanywhere.com/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        // handleMenuClose();
        // setOpenChangePasswordDialog(false);
        console.log(response);
        console.log("hi hekkoe");
        // Assuming the server returns a success status
        const cookies = response.headers["Set-Cookie"];
        console.log(cookies + "This is cookies!");
        props.setLoggedIn(true);
        props.setOpen(false);

        if (cookies) {
          sessionStorage.setItem("cookie", cookies);
          console.log("Login cookie set");
        }
        sessionStorage.setItem("email", email); // Store email in session storage
        // Redirect to "/nonTemporal" page
        window.location.href = "/home";
      })
      .catch((error) => {
        window.alert(error.response.data);

        // console.error("Login failed:", error.response);
        if (error.response.status === 401) {
          setError("Wrong Credential. Please try again.");
        } else {
          setError("An error occurred. Please try again later.");
        }
      });

    // handleClose();
  };

  const handleLogout = () => {
    axios
      .get("http://127.0.0.1:5000/logout", {
        withCredentials: true,
      })
      .then((response) => {
        // Assuming the server returns a success status
        if (response.status === 200) {
          // Clear login status and remove email from session storage
          props.setLoggedIn(false);
          props.setOpen(false);
          sessionStorage.removeItem("email");
          // console.log("Logout successful");
        }
      })
      .catch((error) => {
        window.alert(error.response.data);

        // console.error("Logout failed:", error);
      });
  };

  return (
    <>
      {/* login form */}

      <div className="main-area">
        <div className="main-home-text-login">
          {"Welcome To DineYog - Login"}
        </div>

        {props.loggedIn && (
          <>
            
            <div className="alreadyloggin">

            You Are Already LOGGED IN
            </div>
            <button className="looogin-btn" onClick={handleLogout}>
              LogOut
            </button>
          </>
        )}
        {!props.loggedIn && (
          <>
            <div className="sub-main">
              <div>
                <div className="imgs">
                  <div className="container-image">
                    <img src={profileImage} alt="profile" className="profile" />
                  </div>
                </div>
                <div>
                  <div>
                    <input
                      type="text"
                      placeholder="Email"
                      className="name inputarea"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="second-input">
                    <input
                      type="password"
                      placeholder="Password"
                      className="name inputarea"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="login-button">
                    <button className="looogin-btn" onClick={handleLogin}>
                      Login
                    </button>
                  </div>

                  <p className="link">
                    {error && <p>{error}</p>}
                    {/* <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a> */}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Login;
