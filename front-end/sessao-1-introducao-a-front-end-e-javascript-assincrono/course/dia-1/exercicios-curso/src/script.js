import { nanoid } from "nanoid";

import { nodemailer } from "nodemailer";

const passwordGenerateBtnElement = document.querySelector("#password-generate");
const displayPasswordElement = document.querySelector("#password");

const storeData = (key, value) => {
    localStorage.setItem(key, value);
}

const setPasswordInDisplay = () => {
    const password = nanoid();
    displayPasswordElement.innerHTML = password;
    storeData('lastPassoword', password);
};

const setListeners = () => {
    passwordGenerateBtnElement.addEventListener('click', setPasswordInDisplay);
};

window.onload = () => {
    setListeners();
};