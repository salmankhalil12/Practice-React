// 🧠 Simple Samjho:
// useMemo = “React, is calculation ko dobara mat chalao jab tak zaroori na ho.”
// filters
// search results
// sorting
// heavy loops
// big data calculations

// Example 1 — Slow Calculation Optimization (Super Easy Example) =============

// import { useState, useMemo } from "react";

// function SlowCalculator() {
//   const [count, setCount] = useState(0);

//  const result = useMemo(()=.)
//   return ( 
//     <div>
//       <h2>Result: {expensiveResult}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default SlowCalculator;


// Example 2 — Filtering List (Best Real Example) =========================

// import { useState, useMemo } from "react";

// function FilterList() {
//   const [search, setSearch] = useState("");

//   const users = ["Salman", "Nimra", "Ali", "Ayesha", "Hina","Rizwan"];

//   const filterItems = useMemo(()=>{
//    return users.filter((u)=> u.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
//   },[search])

//   return (
//     <div>
//       <h2>Search User</h2>
//       <input
//         placeholder="Search..."
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {filterItems.map((u) => (
//         <p key={u}>{u}</p>
//       ))}
//     </div>
//   );
// }
// export default FilterList;


// 🔥 Example 3 — Expensive Sorting =====================================

// import { useMemo, useState } from "react";

// function SortExample() {
//   const [sortType, setSortType] = useState("a-z");

//   const items = ["Banana", "Apple", "Orange", "Mango"];

//   const sorted = useMemo(() => {
//     console.log("Sorting...");
//     return [...items].sort(
//       sortType === "a-z" ? (a, b) => a.localeCompare(b) : (a, b) => b.localeCompare(a)
//     );
//   }, [sortType]);

//   return (
//     <div>
//       <button className=" bg-amber-500 px-8 py-1 rounded-lg  mt-3 me-3" onClick={() => setSortType("a-z")}>A-Z</button>
//       <button className=" bg-amber-500 px-8 py-1 rounded-lg mt-3 me-3" onClick={() => setSortType("z-a")}>Z-A</button>

//       {sorted.map((item) => (
//         <p key={item}>{item}</p>
//       ))}
//     </div>
//   );
// }

// export default SortExample;


// 🔥 Example 1 — Password Strength Check (Heavy Validation) =============================

// import { useState, useMemo } from "react";

// function PasswordCheck() {
//   const [password, setPassword] = useState("");

//   const isStrong = useMemo(() => {
//     console.log("Checking password...");
//     return password.length > 8 && /\d/.test(password) && /[A-Z]/.test(password);
//   }, [password]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter password..."
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <h3>{isStrong ? "Strong Password 💪" : "Weak Password ❌"}</h3>
//     </div>
//   );
// }

// export default PasswordCheck;


// 🔥 Example 2 — E-commerce: Find Most Expensive Product ================
// import { useMemo } from "react";

// function ProductPrice() {
//   const products = [
//     { name: "Laptop", price: 2100 },
//     { name: "Mobile", price: 80000 },
//     { name: "Headphones", price: 6000 },
//   ];

//   const maxPrice = useMemo(() => {
//     console.log("Finding max price...");
//     return Math.min(...products.map((p) => p.price));
//   }, []);

//   return <h2>Most Expensive: {maxPrice}</h2>;
// }

// export default ProductPrice;



import { useMemo } from "react";

function RandomColors() {
  const colors = useMemo(() => {
    console.log("Generating colors...");
    const arr = [];
    for (let i = 0; i < 1000; i++) {
      arr.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
    return arr;
  }, []);

  return (
    <div>
      {colors.slice(0, 4).map((c) => (
        <p key={c}>{c}</p>
      ))}
    </div>
  );
}

export default RandomColors;
