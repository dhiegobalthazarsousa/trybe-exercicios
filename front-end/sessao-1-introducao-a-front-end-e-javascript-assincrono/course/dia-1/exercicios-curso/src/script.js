import { nanoid } from "nanoid"; //nanoid é uma library node
import { clipboardCopy } from 'clipboard-copy';

import './style.css'; //consigo fazer isso por causa do vite

const passwordGenerateBtnElement = document.querySelector("#password-generate");
const displayPasswordElement = document.querySelector("#password");

const storeData = (key, value) => {
    localStorage.setItem(key, value);
}

const setPasswordInDisplay = () => {
    const password = nanoid();
    displayPasswordElement.innerHTML = password;
    storeData('lastPassword', password);
};

const setListeners = () => {
    passwordGenerateBtnElement.addEventListener('click', setPasswordInDisplay);
};

const isStored = (data) => {
    return data;
}

const initialize = () => {
    let isStored = localStorage.getItem('lastPassword');
    if (isStored) {
        displayPasswordElement.innerHTML = isStored;
    }
    setListeners();
};

window.onload = () => {
    initialize();
};