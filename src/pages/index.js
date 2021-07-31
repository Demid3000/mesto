//Привет, я знаю, что моя работане не может пройти проверку, тк много не исправностей, но сейчас ночь и я не могу обратьится в слак за помощью, а мне еще 9 проект делать, можете указать на мои ошибки пожалуйста. Почему картинки не выводятся и текст не появляется, я в консоле не могу найти ошибку. БУДУ БЛАГОДАРЕН! Если я не сдам эту и 9 работу, то меня ждет отчисление

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
      const title = items.name;
      const link = items.link;
      const result = newCardFunction(title, link);
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

//Проверка нажатия кнопки добавления карточки
addButton.addEventListener("click", () => {
  newCard.open();
  validateItemTwo.clearInputValidity();
});

//Проверка нажатия кнопки редактирования профиля
editButton.addEventListener("click", () => {
  editProfile.open();
  nameInput.value = user.getUserInfo().nameInput;
  jobInput.value = user.getUserInfo().jobInput;
  validateItem.clearInputValidity();
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
    const inputValue = { title: place.value, link: link.value };
    const result = newCardFunction(inputValue.text, inputValue.link);
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