import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cat from "./cat";
const Root = () => {
  const [cat, setCat] = useState([]);
const nav = useNavigate()
  // "productId": "3"

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/categories/?_embed=products")
        .then((data) => setCat(data.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  // handel click card
  const handelClick = (id) => {
    nav(`/categories/${id}`)

  };

  // show categories
  const showCat = cat.map((item) => (
    <div
      onClick={() => handelClick(item.id)}
      key={item.id}
      className="bg-[#f1f1f1] text-black px-6 py-1 rounded-lg cursor-pointer "
    >
      <img src={item.image} alt={item.title} />
      <div className="title">{item.title}</div>
    </div>
  ));

  return (
    <>

      <div className="read-the-docs flex justify-between">{showCat}</div>

      <div className="mt-10">
        <Cat />
      </div>
    </>
  );
}

export default Root;
