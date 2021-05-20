"use strict";
let openPopup = document.querySelector('.popup-open');
let popup = document.querySelector('.popup');
let closePopup = popup.querySelector('.popup__close');

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
function togglePopup(event){
    popup.classList.toggle('popup_opened')
}

let i = 0;
let like = document.querySelectorAll('.elements__like');
for(i = 0; i < like.length; i++){
    like[i].addEventListener('click', addLikeActive);
}
function addLikeActive(e){
    if (e.target === e.currentTarget){
        e.target.classList.toggle('elements__like_active');
    }
}

let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__text');
let profileInfoName = document.querySelector('.profile__info_name');
let profileInfoText = document.querySelector('.profile__info_text');
function formSubmitHandler (evt) {
    evt.preventDefault();
    if(nameInput.value || jobInput.value){
        profileInfoName.textContent = nameInput.value;
        profileInfoText.textContent = jobInput.value;
    }else{
        profileInfoName.textContent != nameInput.value;
        profileInfoText.textContent != jobInput.value;
    }
}
popup.addEventListener('submit', formSubmitHandler); 