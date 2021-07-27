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

function newCardFunction(text, link) {
  const card = new Card({ text: text, link: link }, template, () => {
    imagePrewiev.open(text, link);
  });
  return card.createCard();
}

//Проверка нажатия кнопки добавления карточки
addButton.addEventListener("click", () => {
  newCard.open();
  cardFormValidator.clearInputValidity();
});

//Проверка нажатия кнопки редактирования профиля
editButton.addEventListener("click", () => {
  editProfile.open();
  firstInput.value = user.getUserInfo().firstInput;
  secondInput.value = user.getUserInfo().secondInput;
  editFormValidator.clearInputValidity();
});

const userPopupWithForm = new PopupWithForm({
  popupSelector: editPopup,
  handleFormSubmit: () => {
    //Изменяем в DOM значения на введенные пользователем
    user.setUserInfo();
    userPopupWithForm.close();
  },
});
userPopupWithForm.setEventListeners();

//Проверка на submite в попапе добавления карточки
const imagePopupWithForm = new PopupWithForm({
  popupSelector: newCardPopup,
  handleFormSubmit: () => {
    //Присваиваем переменной inputValue введенные пользователям значения
    const inputValue = { text: place.value, link: link.value };
    const section = new Section(
      {
        items: inputValue,
        renderer: () => {
          // функция newCardFunction возвращает готовую карточку
          const result = newCardFunction(inputValue.text, inputValue.link);
          section.addItem(result);
        },
      },
    );
    section.renderer();
    const result = newCardFunction(inputValue.name, inputValue.link);
    section.addItem(result);
  },
});
imagePopupWithForm.setEventListeners();

//автоматическая инициализация рендера 6 карточек
(function renderItemsStart() {
  section.renderer();
})();

const validateItem = new FormValidator(object, editForm);
validateItem.enableValidation();

const validateItemTwo = new FormValidator(object, newCardForm);
validateItemTwo.enableValidation();

editProfile.setEventListeners();
imagePrewiev.setEventListeners();
newCard.setEventListeners();