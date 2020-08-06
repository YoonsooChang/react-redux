import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") return count + 1;
  else if (action.type === "MINUS") return count - 1;
  else return count;
};

const store = createStore(countModifier);
store.subscribe(() => (number.innerText = store.getState()));

add.addEventListener("click", () => store.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => store.dispatch({ type: "MINUS" }));
