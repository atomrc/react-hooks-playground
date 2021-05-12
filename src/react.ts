/*
Note: 
At first render it keeps track of all the state (and the order they have been called)

hooks: {state: 1, next: {state: 2, next: {state: 3, next: null}}}
*/
export type ReactComponent = () => string;

let state = { hook: null };
let currentHook = null;
let currentDispatcher = null;
let RenderingComponent: ReactComponent = null;

function mountUseState(initialValue: unknown) {
  const hook = { value: initialValue, next: null };
  if (currentHook) {
    // Not the first hook
    currentHook = currentHook.next = hook;
  } else {
    currentHook = hook;
    state.hook = hook;
  }
  return [
    initialValue,
    (val) => {
      hook.value = val;
      update(RenderingComponent);
    },
  ];
}

function updateUseState() {
  const hook = currentHook;
  const value = hook.value;
  currentHook = hook.next;
  return [
    value,
    (val) => {
      hook.value = val;
      update(RenderingComponent);
    },
  ];
}

export function useState(initialValue) {
  return currentDispatcher(initialValue);
}

function renderWithHooks(Component: ReactComponent) {
  RenderingComponent = Component;
  currentHook = state.hook;
  const res = Component();
  currentHook = null;
  currentDispatcher = null;
  return res;
}

function update(Component: ReactComponent) {
  currentDispatcher = updateUseState;
  console.log(renderWithHooks(Component));
}

export function render(Component: ReactComponent) {
  currentDispatcher = mountUseState;
  const elements = renderWithHooks(Component);
  console.log(elements);
}
