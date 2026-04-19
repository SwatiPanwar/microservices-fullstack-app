import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3002/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Microservices Frontend 🚀</h1>

      <h2>Products</h2>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((p) => (
          <div key={p.id}>
            {p.name} - ₹{p.price}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
