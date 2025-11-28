import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)} className="mx-5 border rounded-xl mt-5 border-amber-600 px-4 py-2">
        Increase
      </button>

      <button onClick={() => setCount(count - 1)} className="mx-5 border rounded-xl mt-5 border-b-amber-700 px-4 py-2">
        Decrease
      </button>
    </div>
  );
}

export default Counter;
