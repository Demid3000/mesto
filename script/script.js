"use strict";
//первая форма
const openEditPopup = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const editPopupCloseButton = editPopup.querySelector('.popup__close');

openEditPopup.addEventListener('click', () => togglePopup(editPopup));
editPopupCloseButton.addEventListener('click', () => togglePopup(editPopup));

//вторая форма
const openAddPopup = document.querySelector('.profile__add-button');
const addButton = document.querySelector('.new');
const addPopupCloseButton = addButton.querySelector('.popup__close');

openAddPopup.addEventListener('click', () => togglePopup(addButton));
addPopupCloseButton.addEventListener('click', () => togglePopup(addButton));

function togglePopup(e){
    e.classList.toggle('popup_opened');
};

// Форма отправки на изминение имени и о себе
const popupFormEdit = document.querySelector('.popup_form_edit');
function formSubmitHandler (evt) {
let nameInput = document.querySelector('#lastname');
let jobInput = document.querySelector('#job');
let profileInfoName = document.querySelector('.profile__name');
let profileInfoText = document.querySelector('.profile__text');
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value; 
    profileInfoText.textContent = jobInput.value; 
    c
}
popupFormEdit.addEventListener('submit', formSubmitHandler);

// добавление карточек и форму
const initialCards = [
    {
    text: 'Архыз',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
    text: 'Челябинская область',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
    text: 'Иваново',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
    text: 'Камчатка',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
    text: 'Холмогорский район',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
    text: 'Байкал',
    link: 'http://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];

const elements = document.querySelector('.elements');
let elementLink = document.querySelector('#link');
let elementText = document.querySelector('#text');

function renderItems() {
    initialCards.forEach((item) => {
      renderItem(item);
    });
  }

const itemTamplate = document.querySelector('.template').content;

function renderItem(item){
const itemCard = itemTamplate.cloneNode(true);
itemCard.querySelector(".element__text").textContent = item.text;
itemCard.querySelector(".element__image").alt = item.text;
itemCard.querySelector(".element__image").src = item.link;

addLikeHandler(itemCard)

elements.appendChild(itemCard);
return itemCard;
}
renderItems()

// Проверка Лайков
function addLikeHandler(item) {
    item.querySelector(".element__like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__like_active");
    });
  }

const popupFormAdd = document.querySelector('.popup_form_add');

popupFormAdd.addEventListener('submit', (evt) =>{
    let name = document.querySelector('#name');
    let linkImg = document.querySelector('#link');
    let elementText = itemCard.querySelector('.element__text');
    let elementImg = itemCard.querySelector('.element__image');
    evt.preventDefault();
    const inputValue =
    elementText.textContent = name.value; 
    elementLike.src = linkImg.value;
    renderItem(inputValue); 
    togglePopup(editPopup);
});