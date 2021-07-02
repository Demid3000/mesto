"use strict";
const editPopup = document.querySelector(".popup_type_edit-profile");

const newCardPopup = document.querySelector(".popup_type_new-profile");
const popupSubmitButton = newCardPopup.querySelector(".popup__submit-button");

const popups = document.querySelectorAll(".popup");

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const editForm = document.querySelector(".popup__form-edit");
const newCard = document.querySelector(".popup__form-add");

const place = document.querySelector("#place");
const link = document.querySelector("#link");
const nameInput = document.querySelector('#lastname');
const jobInput = document.querySelector('#job');

const profileInfoName = document.querySelector('.profile__name');
const profileInfoText = document.querySelector('.profile__text');

//Открытие попапа
export function openPopup(item) {
  item.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

//Закрытие попапа
function closePopup(item) {
  item.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};

//Закрываем popup при нажатии на Esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

//Проверка нажатия кнопки редактирования профиля
editButton.addEventListener("click", () => {
  nameInput.value = profileInfoName.textContent;
  jobInput.value = profileInfoText.textContent;
  openPopup(editPopup);
});


//Проверка нажатия кнопки добавления карточки
addButton.addEventListener("click", () => {
  popupSubmitButton.classList.add("popup__save-button_type_disabled");
  popupSubmitButton.setAttribute("disabled", "disabled");
  openPopup(newCardPopup);
});

//Проверка в попапе редактирования профиля
editForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileInfoName.textContent = nameInput.value;
  profileInfoText.textContent = jobInput.value;
  closePopup(editPopup);
});

//Проверка в попапе добавления карточки
newCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputValue = { text: place.value, link: link.value };
  renderItemsStart(inputValue);
  closePopup(newCardPopup);
  newCard.reset();
});


//Проверка какой попап надо закрыть
popups.forEach(function (item) {
  item.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup__close") ||
      evt.target.classList.contains("popup")
    ) {
      closePopup(item);
    }
  });
});

import { renderItemsStart } from "./card.js";
import { validate } from "./FormValidator.js";

renderItemsStart();