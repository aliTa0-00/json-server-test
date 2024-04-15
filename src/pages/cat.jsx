import axios from "axios";
import { useEffect, useState } from "react";

const Cat = () => {
  const [cat, setCat] = useState([]);
  const [product, setProduct] = useState([]);

  // Fetch categories and initial products on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await axios.get(
          `http://localhost:3000/categories/?_embed=products&_start=0&_end=3`
        );
        setCat(categoriesResponse.data);
        // Automatically display products of the first category if available
        if (categoriesResponse.data.length > 0) {
          setProduct(categoriesResponse.data[0].products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products of a specific category when a category button is clicked
  const handelClickBtn = async (id) => {
    try {
      const productsResponse = await axios.get(
        `http://localhost:3000/categories/${id}?_embed=products`
      );
      setProduct(productsResponse.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  // Render products
  const showProducts = product.map((item) => (
    <div className="bg-slate-200 mb-4 w-[200px]" key={item.id}>
      <p className="text-black">{item.title}</p>
      <img width={'60px'} src={item.image} alt="" />
    </div>
  ));

  // Render category buttons
  const showCat = cat.map((item) => (
      <button
        className="mx-2"
        onClick={() => handelClickBtn(item.id)}
      >
        {item.title}
      </button>
  ));

  return (
    <div>
      <p className="mb-9">Enjoy Our Healthy And Fresh Grocery Items</p>
      <div className="flex justify-center">
        <div>{showCat}</div>
      </div>
      <br />
      <div className="flex justify-center gap-4">{showProducts}</div>
    </div>
  );
};

export default Cat;
