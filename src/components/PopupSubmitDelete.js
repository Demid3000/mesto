import Popup from "./Popup.js";

export default class PopupSubmitDelete extends Popup {
  constructor(popupSelector) {
    //this._popupSelector = popupSelector;
    super(popupSelector);
  }
  setEventListeners(card) {
    super.setEventListeners();
    this._popupSelector.querySelector(".popup__form").addEventListener("submit", (evt) => {
      evt.preventDefault();
      card.target.closest(".element").remove();
      this.close();
    });
  }
  close() {
    super.close();
  }
}