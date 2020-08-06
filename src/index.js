import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const toDos = [];
const ADD = "ADD_TODO";
const DELETE = "DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD, text };
};

const deleteToDo = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = [], action) => {
  ul.innerText = "";
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((e) => e.id !== parseInt(action.id));
    default:
      return state;
  }
};

const paint = () => {
  const del = (e) => {
    const id = e.target.parentNode.id;
    dispatchDeleteToDo(id);
  };

  const toDos = store.getState();
  toDos.forEach((e) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", del);
    li.id = e.id;
    li.innerText = e.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
store.subscribe(paint);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (id) => {
  store.dispatch(deleteToDo(id));
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
