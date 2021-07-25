import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";

import {
  initialCards,
  object,
  editPopup,
  image,
  newCardPopup,
  popupSubmitButton,
  editButton,
  addButton,
  editForm,
  newCardForm,
  place,
  link,
  nameInput,
  jobInput,
  profileInfoName,
  profileInfoText,
  template,
  elements
} from "../utils/constants.js";

//Константы заготовок классов
const user = new UserInfo(profileInfoName, profileInfoText);
const editProfile = new Popup(editPopup);
const imagePrewiev = new PopupWithImage(image);
const newCard = new PopupWithForm({
  popupSelector: newCardPopup,
  handleFormSubmit: () => {},
});
const section = new Section(
  {
    items: initialCards,
    renderer: (items) => {
      const text = items.text;
      const link = items.link;
      const result = newCardFunction(text, link);
      section.addItem(result);
    },
  },
  elements
);

function newCardFunction(title, link) {
  const card = new Card({ title: title, link: link }, template, () => {
    imagePrewiev.open(title, link);
  });
  return card.createCard();
}

//Проверка нажатия кнопки редактирования профиля
editButton.addEventListener("click", () => {
  const userInfo = new UserInfo(profileInfoName, profileInfoText);
  userInfo.getUserInfo();

  const popupWithEdit = new PopupWithForm({
    popupSelector: editPopup,
    handleFormSubmit: (formData) => {
      userInfo.setUserInfo();
    }
  });
  popupWithEdit.setEventListeners();

  const popup = new Popup(editPopup);
  popup.open();
});

//Проверка в попапе добавления карточки
const popupWithCard = new PopupWithForm({
  popupSelector: newCardPopup,
  handleFormSubmit: (formData) => {
  const inputValue = { text: place.value, link: link.value };
  const section = new Section({
      items: inputValue,
      renderer: () => {
        const newCard = new Card({
          item: inputValue,
          cardSelector: template,
          handleCardClick: () => {
            //вызываем функцию, добавляющую попапу с картинкой класс "popup_opened"
            const popup = new PopupWithImage(
              image,
              inputValue.text,
              inputValue.link
            );
            popup.open();
          },
        });
        const cardElement = newCard.createCard();
        section.addItem(cardElement);
      },
    },
    elements
  );
  section.renderer();
  },
});
popupWithCard.setEventListeners();


//Проверка нажатия кнопки добавления карточки
addButton.addEventListener("click", () => {
  popupSubmitButton.classList.add("popup__submit-button_disabled");
  popupSubmitButton.setAttribute("disabled", "disabled");
  popup.open();
});

//автоматическая инициализация рендера 6 карточек
(function renderItemsStart() {
  section.renderer();
})();

const validateItem = new FormValidator(object, editForm);
const validate = validateItem.enableValidation();

const validateItemTwo = new FormValidator(object, newCardForm);
const validateTwo = validateItemTwo.enableValidation();