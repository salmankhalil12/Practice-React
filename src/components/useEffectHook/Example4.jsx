// Day 6 – Categories + Sorting + Modal Popup
// ✔ Category Filter
// ✔ Sort by Price (Low → High / High → Low)
// ✔ Product Detail Modal (Popup)
// ✔ Tailwind Beautiful UI
// ✔ API Data Live Filtering


import { useEffect, useState } from "react";

function Example4() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [modalData, setModalData] = useState(null); // For product modal

  // Fetch Products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Fetch Categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Filtering logic
  const filteredProducts = products
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      category === "all" ? true : item.category === category
    );

  // Sorting logic
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-6">
        🛒 Advanced Product Store (React + Tailwind + API)
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="p-3 rounded-xl shadow border w-full md:w-64"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="p-3 rounded-xl shadow border w-full md:w-52"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          className="p-3 rounded-xl shadow border w-full md:w-52"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer"
            onClick={() => setModalData(item)} // Open modal
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-contain mb-3"
            />
1   
            <h2 className="text-lg font-semibold line-clamp-2">
              {item.title}
            </h2>

            <p className="text-xl font-bold text-green-600 mt-2">
              ${item.price}
            </p>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl relative">

            {/* Close button */}
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setModalData(null)}
            >
              ✖
            </button>

            <img
              src={modalData.image}
              alt=""
              className="w-full h-60 object-contain mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">{modalData.title}</h2>

            <p className="text-gray-600 mb-3">{modalData.description}</p>

            <p className="text-2xl font-bold text-green-600 mb-4">
              ${modalData.price}
            </p>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Example4;
;
