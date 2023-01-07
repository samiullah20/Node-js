import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function Product() {
    const[allData, setAllData] = useState([])
    console.log(allData)
  const GetProduct = () => {
    axios
      .get("http://localhost:8000/product/getdata")
      .then((res) => {
        console.log(res.data);
        setAllData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    GetProduct();
  },[])
  return (
    <>
      <h1>Product</h1>
      {allData.map((e,i)=>{
        return(
            <div key={i} className="main">
                <div className="heading">
                    <h1>{e.title}</h1>
                </div>
            </div>
        )
      })}
    </>
  );
}

export default Product;
