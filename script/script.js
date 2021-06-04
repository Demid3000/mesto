"use strict";
const openEditPopup = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const editPopupCloseButton = editPopup.querySelector('.popup__close');
const openAddPopup = document.querySelector('.profile__add-button');
const addButton = document.querySelector('.popup_type_add');
const addPopupCloseButton = addButton.querySelector('.popup__close');

openEditPopup.addEventListener('click', () => togglePopup(editPopup));
editPopupCloseButton.addEventListener('click', () => togglePopup(editPopup));

openAddPopup.addEventListener('click', () => togglePopup(addButton));
addPopupCloseButton.addEventListener('click', () => togglePopup(addButton));

function togglePopup(e){
    e.classList.toggle('popup_opened');
};

// Лайки
let i = 0; 
let like = document.querySelectorAll('.element__like');
like.forEach((item) => {
    item.addEventListener('click', addLikeActive);
});

function addLikeActive(e){
    if (e.target === e.currentTarget){
        e.target.classList.toggle('element__like_active');
    }
}

// Форма
let popupForm = document.querySelector('.popup__form');
function formSubmitHandler (evt) {
let nameInput = document.querySelector('#lastname');
let jobInput = document.querySelector('#job');
let profileInfoName = document.querySelector('.profile__name');
let profileInfoText = document.querySelector('.profile__text');
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value; 
    profileInfoText.textContent = jobInput.value; 
    togglePopup();
}
popupForm.addEventListener('submit', formSubmitHandler);
