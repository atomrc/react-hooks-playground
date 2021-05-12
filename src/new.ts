import { render, useState } from "./react";

let interval;
function Test() {
  clearInterval(interval);
  const [a, setA] = useState("a");
  const [b, setB] = useState("b");
  interval = setInterval(() => {
    setA(a + "1");
    setB(b + "2");
  }, 1000);
  return a + b;
}

render(Test);
