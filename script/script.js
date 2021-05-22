"use strict";
let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('body > .popup');
let closePopup = popup.querySelector('.popup__close');

openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);
function togglePopup(event){
    popup.classList.toggle('popup_opened')
}
let i = 0; //без него лайки не робят... я хз почему 
let like = document.querySelectorAll('.element__like');
for(i = 0; i < like.length; i++){
    like[i].addEventListener('click', addLikeActive);
}
function addLikeActive(e){
    if (e.target === e.currentTarget){
        e.target.classList.toggle('element__like_active');
    }
}

let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__text');
let profileInfoName = document.querySelector('.profile__box-name');
let profileInfoText = document.querySelector('.profile__box-text');
function formSubmitHandler (evt) {
    evt.preventDefault();
    if(nameInput.value || jobInput.value){
        profileInfoName.textContent = nameInput.value;
        profileInfoText.textContent = jobInput.value;
        return
    }else{
        profileInfoName.textContent != nameInput.value;
        profileInfoText.textContent != jobInput.value;
    }
    togglePopup
}
popup.addEventListener('submit', formSubmitHandler); //popup это у меня и есть форма
