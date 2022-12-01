import React from "react";
import { useState } from "react";
// day la bai tap hien gia tri va tang gia tri 1 don vi khi ta nhan button "Increase"
const Bai1 = () => {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount((preState) => preState + 1);
    setCount((preState) => preState + 1);
    setCount((preState) => preState + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleOnClick}>Increase</button>
    </div>
  );
};

export default Bai1;
