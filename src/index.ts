import React, { useState } from "react";
import { render } from "react-dom";

const Main: React.FC = () => {
  const [state, setState] = useState(0);
  return React.createElement(
    "button",
    { onClick: () => setState(state + 1) },
    state
  );
};

render(React.createElement(Main), document.getElementById("main"));

function createElement(): { type: ComponentClass } {}

let renderingState = {
  dispatcher: null, // the type of dispatcher to use (firstMount, update, error ....)
  component: null, // the current element being rendered
  hook: null, // the current hook being rendered
}
function useStateCustom() {
  return [memoizedState];
}
function renderCustom({ type: ComponentClass }) {
  currentDispatcher = () => updateComponent(); // TODO
  Component(); // Will call useState and read the currentDispatcher
}
