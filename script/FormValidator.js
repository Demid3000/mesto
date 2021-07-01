'use strict'
const object = {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__save-button_disabled",
    inputErrorClass: "popup__input-error"
};

const form = ".popup__form";

class formValidator {
    constructor(object, form) {
      this._inputSelector = object.inputSelector;
      this._submitButtonSelector = object.submitButtonSelector;
      this._inactiveButtonClass = object.inactiveButtonClass;
      this._inputErrorClass = object.inputErrorClass;
      this._form = form;
    }

    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._form));
    
        formList.forEach((item) => {
          item.addEventListener("submit", (evt) => {
            evt.preventDefault();
          });
          this._setEventListeners(item);
        });
    }

    _setEventListeners(item) {
        const inputList = Array.from(item.querySelectorAll(this._inputSelector));
        const buttonElement = item.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
    
        inputList.forEach((inputElement) => {
          inputElement.addEventListener("input", () => {
            this._isValid(item, inputElement);
            this._toggleButtonState(inputList, buttonElement);
          });
        });
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
          buttonElement.classList.add(this._inactiveButtonClass);
          buttonElement.setAttribute("disabled", "disabled");
        } else {
          buttonElement.classList.remove(this._inactiveButtonClass);
          buttonElement.removeAttribute("disabled");
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    }

    _isValid(item, inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(item, inputElement, inputElement.validationMessage);
        } else {
          this._hideInputError(item, inputElement);
        }
    }

    _showInputError(item, inputElement, errorMessage) {
        const errorElement = item.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
    }

    _hideInputError(item, inputElement) {
        const errorElement = item.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
    }
}

const validateItem = new formValidator(object, form);
export const validate = validateItem.enableValidation();