import { useState } from "react";

function Boolean() {
  const [show, setShow] = useState();

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <h2>Now you can see me!</h2>}
    </div>
  );
}

export default Boolean;
