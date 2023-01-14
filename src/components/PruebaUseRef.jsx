import React from 'react'
import { useState, useEffect, useRef } from "react";

function PruebaApp() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
      console.log(count.current = count.current + 1); 
    //   el current es el valor actual del "objeto" que trae 
    //   el Hooks useRef() 
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default PruebaApp