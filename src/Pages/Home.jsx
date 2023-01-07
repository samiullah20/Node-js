import axios from "axios";
import React from "react";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";


const Home = () => {
  const [title,setTitle]= useState()
  const [price,setPrice]= useState()
  const [discription,setDiscription]= useState()

  const AddProduct = ()=>{
    axios.post("http://localhost:8000/product/postdata",{
      title,
      price,
      disc : discription
    }).then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err)})
  }
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
              <h2>Add Product </h2>
            </div>

            <form>
              <div className="mb2 text-start">
                <label htmlFor="exampleInputName1" className="form-label">
                  Title
                </label>
                <input
                  placeholder="Enter your Title"
                  type="text"
                  className="form-control border border-0 border-bottom shadow-none"
                  id="exampleInputName1"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="mb-2 text-start">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Price
                </label>
                <input
                  placeholder="Enter your Price"
                  type="text"
                  className="form-control border border-0 border-bottom shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="mb-5 text-start">
                <label htmlFor="exampleInputPassword1" className="form-label ">
                  Discription
                </label>
                <input
                  placeholder="Create a Discription"
                  type="text"
                  className="form-control border border-0 border-bottom shadow-none"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    setDiscription(e.target.value);
                  }}
                />
              </div>
              <div className="mb-5 text-start">
                <button
                  type="submit"
                  className="btn btn-info w-100 rounded-pill"
                  onClick={AddProduct}
                >
                  Add
                </button>
              </div>
              
              
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
