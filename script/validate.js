function enableValidation() {
  const form = document.querySelectorAll(".popup__form");

  form.forEach(function (item) {
    item.addEventListener("submit", handleFormSubmit);
  });

  form.forEach(function (item) {
    item.addEventListener("input", handleFormInput);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const isValid = form.checkValidity();
}

function handleFormInput(event) {
  const input = event.target;
  const form = event.currentTarget;

  // Шаг 1. Найдем невалидные поля и установим их тексты ошибок
  setCustomError(input);
  // Шаг 2. Показываем тексты ошибок пользователям
  setFieldError(input);
  // Шаг 3. Активируем или деактивируем кнопку
  setSubmitButtonState(form);
}

function setCustomError(input) {
  const validity = input.validity;
  input.setCustomValidity("");
  if (validity.tooShort || validity.tooLong) {
    const currentLength = input.value.length;
    const min = input.getAttribute("minlength");
    input.setCustomValidity(
      `Минимальное количество символов: ${min}. Длина текста сейчас: ${currentLength} символ`
    );
  }

  if (input.value === "") {
    input.setCustomValidity("Вы пропустили это поле");
  }

  if (validity.typeMismatch) {
    input.setCustomValidity("Это не ссылка");
  }
}
function setFieldError(input) {
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = input.validationMessage;
}

function setSubmitButtonState(form) {
  const button = form.querySelector(".popup__submit-button");
  const isValid = form.checkValidity();
  if (isValid) {
    button.classList.remove("popup__submit-button_disabled");
    button.removeAttribute("disabled");
  } else {
    button.classList.add("popup__submit-button_disabled");
    button.setAttribute("disabled", "disabled");
  }
}

enableValidation();