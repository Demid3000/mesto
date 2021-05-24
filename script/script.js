"use strict";
let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = popup.querySelector('.popup__close');

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
function togglePopup(event){
    popup.classList.toggle('popup_opened')
}
// let i = 0; 
// let like = document.querySelectorAll('.element__like');
// for(i = 0; i < like.length; i++){
//     like[i].addEventListener('click', addLikeActive);
// }
// function addLikeActive(e){
//     if (e.target === e.currentTarget){
//         e.target.classList.toggle('element__like_active');
//     }
// }

let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let profileInfoName = document.querySelector('.profile__box-name');
let profileInfoText = document.querySelector('.profile__box-text');
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value; 
    profileInfoText.textContent = jobInput.value; 
    togglePopup();
}
popupForm.addEventListener('submit', formSubmitHandler);
