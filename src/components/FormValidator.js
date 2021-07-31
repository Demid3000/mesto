// Форма для первого попапа
export class FormValidator {
 constructor(object, form) {
      this._inputSelector = object.inputSelector;
      this._submitButtonSelector = object.submitButtonSelector;
      this._inactiveButtonClass = object.inactiveButtonClass;
      this._inputErrorClass = object.inputErrorClass;
      this._form = form;
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
      const inputList = Array.from(
        this._form.querySelectorAll(this._inputSelector)
      );
      const buttonElement = this._form.querySelector(this._submitButtonSelector);
      this._toggleButtonState(inputList, buttonElement);
      //Проверка input'ов на валидность
      inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._isValid(inputElement);
          this._toggleButtonState(inputList, buttonElement);
        });
      });
    }

    // Если валидно, то кнопка загарется иначе тухнет
   _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
          buttonElement.classList.add(this._inactiveButtonClass);
          buttonElement.setAttribute("disabled", "disabled"); 
        } else {
          buttonElement.classList.remove(this._inactiveButtonClass);
          buttonElement.removeAttribute("disabled");
        }
      }

      //Возврощает ошибку если поле не валидно
    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
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

    clearInputValidity() {
      const inputList = Array.from(
        this._form.querySelectorAll(this._inputSelector)
      );
      const buttonElement = this._form.querySelector(this._submitButtonSelector);
      this._toggleButtonState(inputList, buttonElement);
  
      inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    }
}