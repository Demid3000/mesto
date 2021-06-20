"use strict";
const showInputError = (formElement, inputElement, errorMessage, rest) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(rest.inputErrorClass);
  errorElement.textContent = errorMessage;
};
const hideInputError = (formElement, inputElement, rest) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(rest.inputErrorClass);
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement, rest) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      rest
    );
  } else {
    hideInputError(formElement, inputElement, rest);
  }
};

const setEventListeners = (formElement, rest) => {
  const inputList = Array.from(formElement.querySelectorAll(rest.inputSelector)
  );
  const buttonElement = formElement.querySelector(rest.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, rest);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, rest);
    });
  });
};

const enableValidation = ({ formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, rest);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const activeButtonDisabled = (buttonElement, rest) => {
  buttonElement.classList.add(rest.inactiveButtonClass);
  buttonElement.setAttribute("disabled", true);
}

const noActiveButtonDisabled = (buttonElement, rest) => {
  buttonElement.classList.remove(rest.inactiveButtonClass);
  buttonElement.removeAttribute("disabled");
}

const toggleButtonState = (inputList, buttonElement, rest) => {
  if (hasInvalidInput(inputList)) {
    activeButtonDisabled(buttonElement, rest);
  } else {
    noActiveButtonDisabled(buttonElement, rest);
  }
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
});