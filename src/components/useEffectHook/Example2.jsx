import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        🛒 Product Store (API + Tailwind)
      </h1>

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-contain mb-3"
            />

            <h2 className="text-lg font-semibold line-clamp-2">
              {item.title}
            </h2>

            <p className="text-xl font-bold text-green-600 mt-2">
              ${item.price}
            </p>

            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
