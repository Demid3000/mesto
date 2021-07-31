export const initialCards = [
    {
    name: 'Архыз',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
    name: 'Челябинская область',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
    name: 'Иваново',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
    name: 'Камчатка',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
    name: 'Холмогорский район',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
    name: 'Байкал',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const editPopup = document.querySelector(".popup_type_edit-profile");
export const newCardPopup = document.querySelector(".popup_type_new-profile");
export const image = document.querySelector(".popup_type_image-profile");

// Кнопки в попапе "popupSubmitButton" и две кнопки редактирования и добавления карточки
export const popupSubmitButton = newCardPopup.querySelector(".popup__submit-button");
export const editButton = document.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");

//Формы Popup'ов
export const editForm = document.querySelector(".popup__form-edit");
export const newCardForm = document.querySelector(".popup__form-add");

// Форма добавления карточек
export const place = document.querySelector("#place");
export const link = document.querySelector("#link");

//Форма профиля
export const nameInput = document.querySelector('#lastname');
export const jobInput = document.querySelector('#job');

export const profileInfoName = document.querySelector('.profile__name');
export const profileInfoText = document.querySelector('.profile__text');

export const template = ".template";
export const elements = document.querySelector('.elements');

export const object = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_disabled",
    inputErrorClass: "popup__input_type_error",
};