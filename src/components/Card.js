export class Card {
    constructor({item, cardSelector, handleCardClick}){
        this._text = item.text;
        this._link = item.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
      }

    generateCard(){
      this._templateClone = this.getTemplate();
        const photo = this._templateClone.querySelector(".element__image");
        this._templateClone.querySelector(".element__text").textContent = this._text;
        photo.alt = this._text;
        photo.src = this._link;
        this._setEventListeners();
        return this._templateClone
     }

    getTemplate() {
      this.cardElements = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
      return this.cardElements
    }

    _setEventListeners(){
      // Лайки
      this._templateClone.querySelector(".element__like").addEventListener("click", (evt) => {
        evt.target.classList.toggle("element__like_active");
      });

      //Удаление карточки
      this._templateClone.querySelector(".element__trash").addEventListener("click", (evt) => {
        evt.target.closest(".element").remove();
        });

      //Открытие попапа с картинкой
      // при нажатии на элемент img выбранной карточки (или photo) вешаем слушатель
      this._templateClone.querySelector(".elements__image").addEventListener("click", () => {
        this._handleCardClick();
      });
    }
}