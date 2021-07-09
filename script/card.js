"use strict";
import { openPopup } from "./index.js";

const popupImage = document.querySelector('.popup__image');
const subtitle = document.querySelector(".popup__subtitle");
const image = document.querySelector(".popup_type_image-profile");

export class Card {
    constructor(item, template){
        this._text = item.text;
        this._link = item.link;
        this._template = template;
    }

    generateCard(){
        this._getTemplate();
        const photo = this._itemTemplate.querySelector(".element__image");
        this._itemTemplate.querySelector(".element__text").textContent = this._text;
        photo.alt = this._text;
        photo.src = this._link;
        this._setEventListeners();
        return this._itemTemplate;
     }

    _getTemplate() {
      this._itemTemplate = this._template.querySelector(".element").cloneNode(true);
    }

    _setEventListeners(){
      // Лайки
      this._itemTemplate.querySelector(".element__like").addEventListener("click", (evt) => {
        evt.target.classList.toggle("element__like_active");
      });

      //Удаление карточки
      this._itemTemplate.querySelector(".element__trash").addEventListener("click", (evt) => {
        evt.target.closest(".element").remove();
        });

        // Открытие попапа с картинкой
        this._itemTemplate.querySelector(".element__image").addEventListener("click", () => {
          openPopup(image);
          popupImage.src = this._link;
          popupImage.alt = this._name;
          subtitle.textContent = this._name;
        });
    }
}