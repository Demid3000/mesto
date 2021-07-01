"use strict";

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

const popupImage = document.querySelector('.popup__image');
const subtitle = document.querySelector(".popup__subtitle");
const image = document.querySelector(".popup_type_image-profile");

const elements = document.querySelector('.elements');
const template = document.querySelector(".template").content;

class Card {
    constructor(item, tamplate){
        this._text = item.text;
        this._link = item.link;
        this._itemTamplate = tamplate.querySelector('.element').cloneNode(true);
        this._generateCard();
    }

    generateCard(){
        const photo = this._templateClone.querySelector(".element__image");

        this._templateClone.querySelector(".elements__text").textContent = this._text;
        photo.alt = this._text;
        photo.src = this._link;
        this._addOpenImageHandler();
        this._likeHandler();
        this._removeHandler();
        this.getCard();
    }

    _likeHandler() {
        this._templateClone.querySelector(".element__like").addEventListener("click", (evt) => {
          evt.target.classList.toggle("element__like_active");
        });
      }
    
    //Удаление карточки
    _removeHandler() {
        this._templateClone.querySelector(".elements__trash").addEventListener("click", (evt) => {
        evt.target.closest(".elements").remove();
        });
    }

    // Открытие попапа с картинкой
    _addOpenImageHandler() {
        this._templateClone.querySelector(".element__image").addEventListener("click", () => {
          openPopup(image);
          popupImage.src = this._link;
          popupImage.alt = this._name;
          subtitle.textContent = this._name;
        });
    }

    getCard() {
        elements.prepend(this._itemTamplate);
    }
}

export function renderItemsStart(object) {
    if (!object) {
      initialCards.forEach((item) => {
        const newCard = new Card(item, template);
      });
    } else {
        const newCard = new Card(object, template);
    }
  }

  import { openPopup } from "/index.js";