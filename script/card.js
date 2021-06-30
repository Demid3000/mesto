const popupElementImage = document.querySelector('.popup_type_image-profile');
const popupImage = document.querySelector('.popup__image');
const popupCloseButton = document.querySelector('.popup__close');
const subtitle = image.querySelector(".popup__subtitle");

class Card {
    constructor(data){
        this._text = data.text;
        this._link = data.link;
    }

    _getTemplate() {
        const itemTamplate = document.querySelector('.template').content.querySelector('.element').cloneNode(true);

        return itemTamplate;
    }

    generateCard(){
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__image').style.backgroundImage = `url(${this._link})`;
        this._element.querySelector('.element__text').textContent = this._text;

        return this._element;
    }

    _addLikeHandler(item) {
        item.querySelector(".element__like").addEventListener("click", (evt) => {
          evt.target.classList.toggle("element__like_active");
        });
      }

    _addOpenImageHandler() {
        popupImage.src = this._image;
        popupElementImage.classList.add('popup_opened');
    }

    _addCloseImageHandler() {
        popupImage.src = '';
        popupElementImage.classList.remove('popup_opened');
    }

    _setEventListeners() {
        this._element.addEventListener('click', () => {
        this._addOpenImageHandler();
      });
        popupCloseButton.addEventListener('click', () => {
        this._addCloseImageHandler();
      });
    }
}

initialCards.forEach((item) => {
    const card = new Card(item, '.template');
    const itemTamplate = card.generateCard();
    document.querySelector('.elements').append(itemTamplate);
})