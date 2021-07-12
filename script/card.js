"use strict";
import { openPopup } from "./index.js";

const popupImage = document.querySelector('.popup__image');
const subtitle = document.querySelector(".popup__subtitle");
const image = document.querySelector(".popup_type_image-profile");

export class Card {
    constructor(item, cardSelector){
        this._text = item.text;
        this._link = item.link;
        this._cardSelector = cardSelector;
    }

    generateCard(){
        this.getTemplate();
        const photo = this.cardElements.querySelector(".element__image");
        this.cardElements.querySelector(".element__text").textContent = this._text;
        photo.alt = this._text;
        photo.src = this._link;
        this._setEventListeners();
        return this.cardElements
     }

    getTemplate() {
      this.cardElements = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
      return this.cardElements
    }

    _setEventListeners(){
      // Лайки
      this.cardElements.querySelector(".element__like").addEventListener("click", (evt) => {
        evt.target.classList.toggle("element__like_active");
      });

      //Удаление карточки
      this.cardElements.querySelector(".element__trash").addEventListener("click", (evt) => {
        evt.target.closest(".element").remove();
        });

        // Открытие попапа с картинкой
        this.cardElements.querySelector(".element__image").addEventListener("click", () => {
          openPopup(image);
          popupImage.src = this._link;
          popupImage.alt = this._text;
          subtitle.textContent = this._text;
        });
    }
}