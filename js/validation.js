"use strict";

const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elList = document.querySelector(".list");

const todos = [];
// let counter = 0;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const userValue = elInput.value;

  const todo = {
    name: userValue,
    id: todos.length,
  };

  todos.push(todo);

  elInput.value = null;

  elList.innerHTML = null

  for (let item of todos) {
    const newLi = document.createElement("li");

    newLi.textContent = item.name;

    elList.appendChild(newLi);
  }
});
