import { useState } from "react";

export default function OrderHistoryPage() {
  let [btn, setBtn] = useState("Try the button");
  let [n, setN] = useState(0); 
  const msg = function() {
    n++;
    btn = `You pressed the button ${n} times`;
    setBtn(btn);
    setN(n);  
  }
  const reset = function() {
    setBtn("Try the button");
    setN(0); 
  }
  return (
    <>
      <h1>{btn}</h1>
      <button class="button is-primary" onClick={msg}>Push Me</button>
      <button class="button is-danger" onClick={reset}>Push Me Instead</button>
    </>
  );
}