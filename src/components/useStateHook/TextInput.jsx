import { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input 
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something..."
        className="border border-amber-400 px-4 py-2 rounded-xl mx-auto" 
      />
      
      <h3>You typed: {text}</h3>
    </div>
  );
}

export default TextInput;
