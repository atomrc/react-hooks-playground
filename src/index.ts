import React, { useEffect, useState } from "react";
import { render } from "react-dom";

const h = React.createElement;

const Sub = () => {
  console.log("render sub");
  return h("div", undefined, "ok");
};
const Main = () => {
  const [one, setOne] = useState("one");
  const two = useState("two");
  const three = useState("three");
  console.log("render main");
  useEffect(() => {
    const interval = setInterval(() => setOne(one + 1), 5000);
    return () => clearInterval(interval); // < Do not forget this
  }, [one]);

  return h("div", undefined, one);
};

render(h(Main), document.getElementById("main"));
