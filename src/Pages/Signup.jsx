import React from 'react'
import { useState } from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';



const Signup = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
//   useEffect(() => {
//     if (user) {
//       navigate("/Profile");
//     }
//   }, []);
 
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 mt-5 border rounded shadow">
            <div className="icons text-center fs-2 mb-2">
              <BsPersonCircle style={{ color: "#0dcdf0" }} />
            </div>
            <div className="heading mb-3 text-center">
              <h2>Create Account!</h2>
            </div>

            <form>
              <div className="mb2 text-start">
                <label htmlFor="exampleInputName1" className="form-label">
                  First Name
                </label>
                <input
                  placeholder="Enter your First Name"
                  type="text"
                  className="form-control border border-0 border-bottom shadow-none"
                  id="exampleInputName1"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-2 text-start">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  E-mail
                </label>
                <input
                  placeholder="Enter your E-Mail"
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
                  placeholder="Create a Password"
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
                  Create
                </button>
              </div>
              <div className="error">
                <p className="text-danger text-center">{error}</p>
              </div>
              <div className="already pb-4">
                <span>Already a user ? <Link to="/login">LOG IN</Link></span>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default Signup