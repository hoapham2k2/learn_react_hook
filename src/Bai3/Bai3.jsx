import React from "react";
// tuong tu bai1 va bai2, nhung ta thay doi (them) gia tri cua state

const Bai3 = () => {
  const [info, setInfo] = React.useState({
    name: "Nguyen Van A",
    age: 20,
    address: "Ha Noi",
  });

  const handleOnClick = () => {
    setInfo((preState) => ({
      ...preState,
      hobbly: "Play game",
    }));
  };
  return (
    <div>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleOnClick}>Add Hobby</button>
    </div>
  );
};

export default Bai3;
