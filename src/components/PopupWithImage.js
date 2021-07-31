import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open(title, link) {
    const popupImage = this._popupSelector.querySelector(".popup__image");
    const subtitle = this._popupSelector.querySelector(".popup__subtitle");
    this._popupSelector.classList.add("popup_opened");
    popupImage.src = link;
    popupImage.alt = title;
    subtitle.textContent = title;
  }
}