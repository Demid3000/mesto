export class Card {
    constructor({title, link}, cardSelector, handleCardClick){
        this._title = title;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
      }

      createCard(){
        this._templateClone = this._getTemplate();
        const photo = this._templateClone.querySelector(".element__image");
        this._templateClone.querySelector(".element__text").textContent = this._title;
        photo.alt = this._title;
        photo.src = this._link;
        this._setEventListeners();
        return this._templateClone
     }

    _getTemplate() {
      const cardElements = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
      return cardElements
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
      this._templateClone.querySelector(".element__image").addEventListener("click", () => {
        this._handleCardClick();
      });
    }
} 