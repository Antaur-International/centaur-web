/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../layout/_lyt_loader";
import { API_HOST } from "../../API/constant";
export default function Form() {
  const email = useRef(null);
  const password = useRef(null);
  const hideShowImage = useRef(null);
  const sessionStorage = window.sessionStorage;

  const Navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: email.current.value,
      password: password.current.value,
    };

    if (email) {
      setLoading(true);
      axios
        .post(`${API_HOST}/user/login`, user)
        .then((res) => {
          // console.log(res.data);
          if (res.data.success === true) {
            console.log("User logged in successfully");
            sessionStorage.setItem("user", JSON.stringify(res.data.session));
            Navigate("/dashboard");
          } else {
            alert(res.data.message);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const changePasswordType = (e) => {
    if (password.current.type === "password") {
      password.current.type = "text";
      hideShowImage.current.src = "/centaur-web/images/icons/eye_open.svg";
    } else {
      password.current.type = "password";
      hideShowImage.current.src = "/centaur-web/images/icons/eye_close.svg";
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      Navigate("/dashboard");
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <form className="login_page_form">
      <div className="page_form_div">
        <label>Email</label>
        <input ref={email} type="email" placeholder="name@example.com" />
      </div>
      <div className="page_form_div">
        <label>Password</label>
        <div className="form_div_password_input">
          <input type="password" placeholder="********" ref={password} />
          <button onClick={changePasswordType} type="button">
            <img
              src="/centaur-web/images/icons/eye_close.svg"
              alt=""
              ref={hideShowImage}
            />
          </button>
        </div>
      </div>

      <div className="page_form_links">
        <Link to="/register">Don't have an account?</Link>
        <Link to="/forgotPassword">Forgot Password?</Link>
      </div>

      <button type="button" onClick={handleSubmit} className="page_form_btn">
        Login
      </button>
    </form>
  );
}
