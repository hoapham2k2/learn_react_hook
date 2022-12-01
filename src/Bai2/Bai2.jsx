import React from "react";
// tuong tu bai tap 1, nhung ta se khoi tao gia tri bang 1  callback

const order = [100, 200, 300];
const Bai2 = () => {
  const [count, setCount] = React.useState(
    order.reduce((total, curValue) => total + curValue, 0)
  );

  const handleOnClick = () => {
    setCount((preState) => preState + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleOnClick}>Increase</button>
    </div>
  );
};

export default Bai2;
