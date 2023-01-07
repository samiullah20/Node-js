import React from "react";
import { useState } from "react";
import { CgLogIn } from "react-icons/cg";
import { useNavigate } from "react-router-dom";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const user = localStorage.getItem("uid");
  const navigate = useNavigate();




  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 mt-5 border rounded shadow">
            <div className="icons text-center fs-1 mb-2">
              <CgLogIn style={{ color: "#0dcdf0" }} />
            </div>
            <div className="heading mb-3 text-center">
              <h2>Welcome!</h2>
            </div>

            <form>
              <div className="mb-2 text-start">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  E-mail
                </label>
                <input
                  placeholder="Email address"
                  type="email"
                  className="form-control border border-0 border-bottom shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-5 text-start">
                <label htmlFor="exampleInputPassword1" className="form-label ">
                  Password
                </label>
                <input
                  placeholder="Password"
                  type="password"
                  className="form-control border border-0 border-bottom shadow-none"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="mb-5 text-start">
                <button
                  type="submit"
                  className="btn btn-info w-100 rounded-pill"
                 
                >
                  Login
                </button>
              </div>
              <div className="error">
                <p className="text-danger text-center">{error}</p>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
