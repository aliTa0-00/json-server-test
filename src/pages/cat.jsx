import axios from "axios";
import { useEffect, useState } from "react";

const Cat = () => {
  const [cat, setCat] = useState([]);
  const [product, setProduct] = useState([]);

  // show category data 
  useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:3000/categories/?_embed=products&_start=0&_end=3`
        )
        .then((data) => setCat(data.data));
    } catch (error) {
      console.log(error);
    }
  }, []);


  const handelClickBtn = async (id) => {
    await axios
      .get(`http://localhost:3000/categories/${id}?_embed=products`)
      .then((data) => setProduct(data.data.products));
  };
  
  const showCat = cat.map((item) => (
    <>
      <button
        className="mx-2"
        onClick={() => handelClickBtn(item.id)}
        key={item.id}
      >
        {item.title}
      </button>
    </>
  ));

  // show products
  const showProducts = product.map((item) => (
    <div className="bg-slate-200 mb-4 w-[200px]"  key={item.id}>
      <p className="text-black">{item.title}</p>
      <img width={'60px'} src={item.image} alt="" />
    </div>
  ));

  return (
    <div>
      <p className="mb-9">Enjoy Our Healthy And Fresh Grocery Items</p>
      <div>{showCat}</div>
      <br />
      <div className="flex justify-center gap-4">{showProducts}</div>
    </div>
  );
};

export default Cat;
