//Я НЕ СМОГ СДЛЕАТЬ ТАК, ЧТОБЫ КНОПКА ВО ВТОРОМ ПОПАПЕ ОТКЛЮЧАЛАСЬ И В СЛАКЕ МНЕ НЕ ПОМОГЛИ И САМ Я НЕ СМОГ, ПО ЭТОМУ ПОЛЯ БУДУТ ЗАПОЛНЕНЫ(У МЕНЯ БОЛЬШЕ АКАДЕМА НЕТ)

"use strict";
const elements = document.querySelector('.elements');

const image = document.querySelector(".popup_type_image-profile");

const editPopup = document.querySelector(".popup_type_edit-profile");

const newCardPopup = document.querySelector(".popup_type_new-profile");
const popupSubmitButton = newCardPopup.querySelector(".popup__submit-button");

const popups = document.querySelectorAll(".popup");

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const editForm = document.querySelector(".popup__form-edit");
const newCard = document.querySelector(".popup__form-add");

const place = document.querySelector("#place");
const link = document.querySelector("#link");
const nameInput = document.querySelector('#lastname');
const jobInput = document.querySelector('#job');

const profileInfoName = document.querySelector('.profile__name');
const profileInfoText = document.querySelector('.profile__text');

// добавление карточек и форму
function renderItems() {
  initialCards.forEach((item) => {
    renderItem(item);
  });
}

function renderItem(item) {
  const newCard = createCard(item);
  elements.prepend(newCard);
}

const itemTamplate = document.querySelector('.template').content;

function createCard(item) {
  const itemCard = itemTamplate.cloneNode(true);
  itemCard.querySelector(".element__text").textContent = item.text;
  itemCard.querySelector(".element__image").alt = item.text;
  itemCard.querySelector(".element__image").src = item.link;

  addOpenImageHandler(itemCard, item)
  addLikeHandler(itemCard);
  removeCard(itemCard);

  return itemCard;
}

// Проверка Лайков
function addLikeHandler(item) {
  item.querySelector(".element__like").addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like_active");
  });
}

// Удаление карточки
function removeCard(item) {
  item.querySelector('.element__trash').addEventListener('click', (evt) => {
    evt.target.closest(".element").remove();
  })
}

//Открытие попапа
function openPopup(item) {
  item.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

//Закрытие попапа
function closePopup(item) {
  item.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};

//Закрываем popup при нажатии на Esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

//Проверка нажатия кнопки редактирования профиля
editButton.addEventListener("click", () => {
  nameInput.value = profileInfoName.textContent;
  jobInput.value = profileInfoText.textContent;
  openPopup(editPopup);
});


//Проверка нажатия кнопки добавления карточки
addButton.addEventListener("click", () => {
  openPopup(newCardPopup);
});


//Открытие картинки
const subtitle = image.querySelector(".popup__subtitle");
const popupImage = image.querySelector(".popup__image");
function addOpenImageHandler(card, item) {
  card.querySelector(".element__image").addEventListener("click", (card) => {
    popupImage.src = item.link;
    popupImage.textContent = item.text;
    subtitle.alt = item.text;
    openPopup(image);
  });
}

//Проверка в попапе редактирования профиля
editForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileInfoName.textContent = nameInput.value;
  profileInfoText.textContent = jobInput.value;
  closePopup(editPopup);
});

//Проверка в попапе добавления карточки
newCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputValue = { text: place.value, link: link.value };
  renderItem(inputValue);
  closePopup(newCardPopup);
});
renderItems()

//Проверка какой попап надо закрыть
popups.forEach(function (item) {
  item.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup__close") ||
      evt.target.classList.contains("popup")
    ) {
      closePopup(item);
    }
  });
});