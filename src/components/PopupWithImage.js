import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, text, link) {
    super(popupSelector);
    this._link = link;
    this._text = text;
  }

  open() {
    const popupImage = this._popupSelector.querySelector(".popup__image");
    const subtitle = this._popupSelector.querySelector(".popup__subtitle");
    this._popupSelector.classList.add("popup_opened");
    popupImage.src = this._link;
    popupImage.alt = this._text;
    subtitle.textContent = this._text;
    super.setEventListeners();
  }
}