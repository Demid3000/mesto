"use strict";
const elements = document.querySelector('.elements');

const image = document.querySelector(".image");

const editPopup = document.querySelector(".edit");

const newCardPopup = document.querySelector(".new");

const popups = document.querySelectorAll(".popup");

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const editForm = document.querySelector(".popup_form_edit");
const newCard = document.querySelector(".popup_form_add");

let nameInput = document.querySelector('#lastname');
let jobInput = document.querySelector('#job');
let profileInfoName = document.querySelector('.profile__name');
let profileInfoText = document.querySelector('.profile__text');

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

function renderItems() {
    initialCards.forEach((item) => {
      renderItem(item);
    });
  }

  function renderItem(item) {
    const newCard = createCard(item);
    elements.prepend(newCard);
  }

const itemTamplate = document.querySelector('.template').content;
function createCard(item){
const itemCard = itemTamplate.cloneNode(true);
itemCard.querySelector(".element__text").textContent = item.text;
itemCard.querySelector(".element__image").alt = item.text;
itemCard.querySelector(".element__image").src = item.link;

addOpenImageHandler(itemCard, item)
addLikeHandler(itemCard);
removeCard(itemCard);

return itemCard;
}

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

//Открытие попапа
function openPopup(item) {
  item.classList.add("popup_opened");
}

//Закрытие попапа
function closePopup(item) {
  item.classList.remove("popup_opened");
}

//Проверка нажатия кнопки редактирования профиля
editButton.addEventListener("click", () => {
  profileInfoName.textContent = nameInput.value; 
  profileInfoText.textContent = jobInput.value;
  openPopup(editPopup);
});


//Проверка нажатия кнопки добавления карточки
addButton.addEventListener("click", () => {
  openPopup(newCardPopup);
});

//Проверка какой попап надо закрыть
popups.forEach(function (item) {
  item.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__close")) {
      closePopup(item);
    }
  });
});

//Открытие картинки
function addOpenImageHandler(card, item) {
    card.querySelector(".element__image").addEventListener("click", (card) => {
    const subtitle = image.querySelector(".popup__subtitle");
    image.querySelector(".popup__image").src = item.link;
    subtitle.textContent = item.text;
    subtitle.alt = item.text;
    openPopup(image);
  });
}

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
  renderItem(inputValue);
  closePopup(newCardPopup);
  newForm.reset();
});
renderItems()