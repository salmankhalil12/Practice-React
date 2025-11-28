// ======================================Definition UseRef Hook =====================================================

// ChatGPT said:

// Bilkul! Yahan useRef ki sab se simple, asan, easy-language mai definition de raha hoon:

// ✅ useRef ki Asaan Definition

// useRef ek dabba (box) hota hai jisme tum koi bhi value rakh sakte ho —
// aur wo value change hone par component re-render nahi hota.

// Bas itna hi!

// ✔ Asaan Lafzon Mai:
// useState → value badle = component re-render hota hai
// useRef → value badle = re-render nahi hota
// ⭐ useRef ka 1 line meaning:
// "useRef aik aisa variable banata hai jo React ke render cycle ke bahar hota hai."
// ✔ Simple Explanation:

// useRef aik hidden storage deta hai

// jisme tum:

// value store kar sakte ho

// timers ka ID rakh sakte ho

// previous values rakh sakte ho

// input ko focus kar sakte ho

// Aur ye sab bina component ko dobara re-render kiye hota hai.

// ✔ Example se aur easy:

// Agar tum chaho ke:

// input automatically focus ho

// timer ko start/stop karna ho

// previous value rakhna ho

// koi camel-case flag rakhna ho

// koi calculation ka counter rakhna ho

// To useRef perfect hai.

// 📌 Ultra Simple Version:
// “useRef ek aisa hook hai jo value ko memory me save kar deta hai bina component ko dubara chalaye.”



// import { useRef, useEffect } from "react";

// function UseRefHook() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();   // Input automatically focus
//     console.log(inputRef)
// }, []);

//   return (
//     <div>
//       <h2>Auto Focus Input</h2>
//       <input ref={inputRef} placeholder="Type something..." />
//     </div>

//   );
// }

// export default UseRefHook;


// ⭐ Example 2 — useRef Without Re-render (Counter Example) ============

// import { useRef, useState } from "react";

// function RefCounter() {
//   const [count, setCount] = useState(0);
//   const ref = useRef(0);

//   const increase = () => {
//     setCount(count + 1);     // re-render
//     ref.current = count;        // re-render nahi
//   };

//   return (
//     <div>
//       <h2>State: {count}</h2>
//       <h2>Ref: {ref.current}</h2>

//       <button onClick={increase}>Increase Both</button>
//     </div>
//   );
// }

// export default RefCounter;



// Example 3 — Store Previous Value ===========================

// import { useState, useEffect, useRef } from "react";

// function PreviousValue() {
//   const [value, setValue] = useState("");
//   const prevValue = useRef("");

//   useEffect(() => {
//     prevValue.current = value;
//   }, [value]);

//   return (
//     <div>
//       <h2>Current: {value}</h2>
//       <h2>Previous: {prevValue.current}</h2>

//       <input
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Type value..."
//       />
//     </div>
//   );
// }

// export default PreviousValue;

// ⭐ Example 4 — Timer with useRef (Best Real Example) ===================

// import { useRef, useState } from "react";

// function TimerWithRef() {
//   const timerRef = useRef(null);
//   const [seconds, setSeconds] = useState(0);
// const start = (()=>{
//     if(!timerRef.current){
//     timerRef.current = setInterval(()=>{
//         setSeconds((prev)=> prev+1)
//     },1000)
//     }
// })

// const stop = (()=>{
//     clearInterval(timerRef.current)
//     timerRef.current= null
// })
//   return (
//     <div>
//       <h2>Timer: {seconds}</h2>
//       <button onClick={start} className="border px-5 py-1 mt-5   bg-amber-300 text-blue-800 rounded-lg">Start</button>
//       <button onClick={stop} className="border px-5 py-1 mt-5  ms-3 bg-amber-300 text-blue-800 rounded-lg">Stop</button>
//     </div>
//   );
// }

// export default TimerWithRef;


// ⭐ Example 5 — Click Outside Detection (REAL PROJECT USE CASE) ======

// import { useRef, useEffect } from "react";

// function ClickOutside() {
//   const boxRef = useRef(null);

//   useEffect(() => {
//     const handleClick = (e) => {
//       if (boxRef.current && !boxRef.current.contains(e.target)) {
//         console.log("Clicked outside the box!");
//       }
//     };

//     document.addEventListener("mousedown", handleClick);

//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   return (
//     <div
//       ref={boxRef}
//       style={{
//         padding: "20px",
//         background: "#eee",
//         display: "inline-block",
//         margin: "40px"
//       }}
//     >
//       Click Inside This Box
//     </div>
//   );
// }

// export default ClickOutside;


// // ⭐ Example 6 — useRef as a Form Reset Tool =============

// import { useRef,useState } from "react";

// function FormRef() {
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//     const [name,setName] =useState("")
//     const [email,setEmail] =useState("")
//   const resetForm = () => {
//     nameRef.current.value = "";
//     emailRef.current.value = "";
//     setName("");
//     setEmail("");
    
//   };
//   const AddForm = ((e)=>{
//      e.preventDefault();
//      setName("");
//     setEmail("");
//     setName(nameRef.current.value)
//     setEmail(emailRef.current.value)
    
//   })

//   return (
//     <div>
//       <h2>Form Ref Example</h2>
//       <input ref={nameRef} placeholder="Name" /><br />
//       <input ref={emailRef} placeholder="Email" /><br />
//         <h2 className="text-bold text-yellow-300">{name}</h2>
//         <h2 className="text-bold text-red-300">{email}</h2>

//       <button onClick={resetForm}>Reset Form</button>
//       <br/>
//       <button onClick={AddForm}>Add Form</button>
//     </div>
//   );
// }
// export default FormRef;

// ⭐ Example 7 — Store API Previous Result (Important!)========================

// import { useState, useEffect, useRef } from "react";

// function ApiPrev() {
//   const [user, setUser] = useState(null);
//   const prevUser = useRef(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/2")
//       .then((r) => r.json())
//       .then((data) => {
//         prevUser.current = user; // store previous
//         setUser(data);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Current User: {user?.name}</h2>
//       <h3>Previous User: {prevUser.current?.name || "None"}</h3>
//     </div>
//   );
// }
// export default ApiPrev;



import { useRef } from "react";

function BoxAnimation() {
    
    const boxRef = useRef(null);
  const moveRight = () => {
    boxRef.current.style.transform = "translateX(200px)";
    boxRef.current.style.transition = "1s";
    boxRef.current.style.background = "yellow";
  };
  const moveleft = () => {
    boxRef.current.style.transform = "translateX(0px)";
    boxRef.current.style.transition = "1s";
    boxRef.current.style.background = "red";
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "80px",
          height: "80px",
        }}
      ></div>
      <button onClick={moveRight} className="me-3">Move Box</button>
      <button onClick={moveleft}>Move Box</button>

    </div>
  );
}

export default BoxAnimation;


