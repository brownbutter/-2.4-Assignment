import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import PriceInput from "./PriceInput";

function Counter() {
  const [count, setCount] = useState(0);
  // const [discount, setDiscount] = useState(0);

  // Derived state - useful when one state can be derived from another
  const discount = count >= 5 ? 20 : 0;

  const [name, setName] = useState("");
  // const name = "Banana";
  //const price = 2.99;

  console.log("name", name);

  const handlePlus = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleMinus = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // const handleReset = () => setCount(0);

  const handleNameChange = (event) => {
    // console.log(event);
    setName(event.target.value);
  };

  const [price, setPrice] = useState("2.99");
  const priceDisplay = price >= 0 ? price : 0;

  const handlePriceChange = (event) => {
    // console.log(event);
    setPrice(event.target.value);
  };

  return (
    <>
      {/* <h1>Product</h1> */}
      <div>
        {/* controlled input */}
        {/* <input onChange={handleNameChange} value={name} /> */}

        {/* uncontrolled input */}
        {/* <input /> */}
      </div>
      {/* {name} */}
      <Input value={name} label="Product" onChange={handleNameChange} />
      <PriceInput value={price} label="Price" onChange={handlePriceChange} />
      {/* onClick on this button is an event handler */}
      {/* <button onClick={handleMinus}>-</button> */}
      {/* onClick on this Button component is actually a prop */}
      <Button label="-" onClick={handleMinus} />
      <span>{count}</span>
      <Button label="+" onClick={handlePlus} />
      {/* <button onClick={handlePlus}>+</button> */}

      <div>
        <Button
          customStyles={{ width: 150 }}
          label="Reset"
          onClick={() => setCount(0)}
        />
      </div>
      <h2>{`$ ${priceDisplay}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
    </>
  );
}
export default Counter;

// 2 approaches to set state
// 1. set directly
// 2. use callback fn

// Higher Order Functions (HOF)
// 2 types
// Function accepts a function as arg
// Function returning another function

// In React, 2 types of inputs
// 1. Controlled Input
// because it is tightly controlled by React
// to make it controlled, we need add 2 attrib - value, onChange
// User interacts with the input -> onChange event fires
// -> handler handles the event and updates the state
// -> state change updates the UI
// 2. Uncontrolled Input
