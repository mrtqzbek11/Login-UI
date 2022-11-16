'use strict';

const showHide = document.querySelector('.show-hide-box');
const passwordInput = document.querySelector('#password');

showHide.addEventListener('click', ()=> {

    let type = passwordInput.type == 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

});