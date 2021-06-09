"use strict";
//первая форма
const openEditPopup = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.edit');
const editPopupCloseButton = editPopup.querySelector('.popup__close');

openEditPopup.addEventListener('click', () => togglePopup(editPopup));
editPopupCloseButton.addEventListener('click', () => togglePopup(editPopup));

//вторая форма
const openAddPopup = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.new');
const addPopupCloseButton = addPopup.querySelector('.popup__close');

openAddPopup.addEventListener('click', () => togglePopup(addPopup));
addPopupCloseButton.addEventListener('click', () => togglePopup(addPopup));

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
    togglePopup(editPopup) 
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
removeCard(itemCard)

elements.prepend(itemCard);
return itemCard;
}
renderItems()

// Проверка Лайков
function addLikeHandler(item) {
    item.querySelector(".element__like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__like_active");
    });
  }

// Удаление карточки
function removeCard(item){
  item.querySelector('.element__trash').addEventListener('click', (evt)=>{
    evt.target.closest(".element").remove();
  })
}

//Открытие картинки 
const openImage = document.querySelector('.image');
function addOpenImageHandler(card, item) {
  card.querySelector(".element__image").addEventListener("click", (card) => {
    const itemCard = itemTamplate.cloneNode(true);
    const addImage = itemCard.querySelector('.element__image');
    const image = document.querySelector('.image');
    const imageCloseButton = image.querySelector('.popup__close');
    addImage.addEventListener('click', () => togglePopup(image));
    imageCloseButton.addEventListener('click', () => togglePopup(image));
    const subtitle = image.querySelector(".popup__subtitle");
    image.querySelector(".popup__image").src = item.link;
    subtitle.textContent = item.name;
    subtitle.alt = item.name;
  });
}

const popupFormAdd = document.querySelector('.popup_form_add');
popupFormAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputValue = { text: place.value, link: link.value };
  renderItem(inputValue);
  togglePopup(addPopup) 
});
