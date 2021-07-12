// Форма для первого попапа
export class FormValidator {
 constructor(object, formElement) {
      this._inputSelector = object.inputSelector;
      this._submitButtonSelector = object.submitButtonSelector;
      this._inactiveButtonClass = object.inactiveButtonClass;
      this._inputErrorClass = object.inputErrorClass;
      this._form = formElement;
    };

   // Событие по кнопке
    enableValidation() {
      this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
          });
          this._setEventListeners();
    }

    _setEventListeners() {
      // Ищем все инпуты и кнопку 
      this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
      this._buttonElement = this._form.querySelector(this._submitButtonSelector);

      //Проверка input'ов на валидность
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener("input", () => {
            this._isValid(inputElement);
            this._toggleButtonState();
          });
        });
    }

    // Если валидно, то кнопка загарется иначе тухнет
   _toggleButtonState() {
        if (this._hasInvalidInput()) {
          this._buttonElement.classList.add(this._inactiveButtonClass);
          this._buttonElement.setAttribute("disabled", "disabled"); 
        } else {
          this._buttonElement.classList.remove(this._inactiveButtonClass);
          this._buttonElement.removeAttribute("disabled");
        }
      }

      //Возврощает ошибку если поле не валидно
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    }

    //Проверка на валидность
    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
        } else {
          this._hideInputError(inputElement);
        }
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
    }

    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
    }
}