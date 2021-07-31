export default class Popup {
    constructor(popupSelector) {
      this._popupSelector = popupSelector;
      this._handleEscClose = this._handleEscClose.bind(this);
    }
    _handleEscClose(evt) {
      // Проверяем на нажатие клавиш
      if (evt.key === "Escape") {
        this.close();
        document.removeEventListener("keydown", this._handleEscClose);
        // Проверяем на клик по крестику или на область вокруг попапа
      } else if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup")
      ) {
        this.close();
        document.removeEventListener("mousedown", this._handleEscClose);
      }
    }
    open() {
      this._popupSelector.classList.add("popup_opened");
      this.setEventListeners();
    }
    close() {
      this._popupSelector.classList.remove("popup_opened");
    }
    setEventListeners() {
      document.addEventListener("keydown", this._handleEscClose);
      document.addEventListener("mousedown", this._handleEscClose);
    }
  }