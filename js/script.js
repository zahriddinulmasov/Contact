"use strict";

const elHeroForm = document.querySelector(".hero__form");
const elHeroInputName = document.querySelector(".hero__input-name");
const elHeroInputSurname = document.querySelector(".hero__input-surname");
const elHeroFormNumber = document.querySelector(".hero__input-number");
const elHeroBtn = document.querySelector(".hero__btn");

const elList = document.querySelector(".hero__list");

const contacts = [];

elHeroForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const nameValue = elHeroInputName.value;
  const surnameValue = elHeroInputSurname.value;
  const numberValue = elHeroFormNumber.value;

  const contact = {
    name: nameValue,
    surname: surnameValue,
    number: numberValue,
    id: contacts.length,
  };

  contacts.push(contact);

  elHeroInputName.value = null;
  elHeroInputSurname.value = null;
  elHeroFormNumber.value = null;

  elList.innerHTML = "";

  for (let item of contacts) {
    const newLi = document.createElement("li");
    const newName = document.createElement("p");
    const newSurname = document.createElement("p");
    const newNumber = document.createElement("p");

    newName.textContent = item.name;
    newSurname.textContent = item.surname;
    newNumber.textContent = item.number;

    
    newName.setAttribute("class", "form__name text-primary fs-4 m-0");
    newSurname.setAttribute("class", "form__name text-primary fs-6 m-0");
    newNumber.setAttribute("class", "form__number text-info fs-3 m-0");

    elList.appendChild(newLi);
    newLi.appendChild(newName);
    newLi.appendChild(newSurname);
    newLi.appendChild(newNumber);
  }
});
