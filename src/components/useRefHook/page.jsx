// import { useRef } from "react";

// function UseRefHooks() {
//   const inputRef = useRef(null);

//   return (
//     <div>
//       <input ref={inputRef} placeholder="type..." className="border border-amber-700 me-4"/>
//       <button className="coursor-pointer border px-4 py-1 bg-amber-600 mt-4 rounded-2xl" onClick={() => inputRef.current.focus()}>Focus</button>
//     </div>
//   );
// }

// export default UseRefHooks

import { useState, useEffect } from "react";

function UseRefHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed!", count);
  }, [count]); // sirf count change par


  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick...");
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);


  //  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

    </>


  );
}

export default UseRefHooks