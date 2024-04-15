import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Deta = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  console.log(data)
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:3000/products?categoryId=${id}`)
        .then((data) => setdata(data.data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const showData = data.map((item) => (
    <div className="Box bg-white p-4 rounded-xl border" key={item.id}>
      <img src={item.image} alt='s'/>
      <div>
        <h3 className="text-black text-2xl font-bold">{item.title}</h3>

        <button className="">Add To Cart</button>
      </div>
    </div>
  ));
  return <div className="card flex justify-between">{showData}</div>;
};

export default Deta;
