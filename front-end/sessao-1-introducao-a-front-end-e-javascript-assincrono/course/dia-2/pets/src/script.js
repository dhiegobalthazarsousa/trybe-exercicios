// Dog API: https://dog.ceo/api/breeds/image/random
// Cat API: https://aws.random.cat/meow

import './style.css'

const btnRandomDog = document.querySelector("#dog");
const btnRandomCat = document.querySelector("#cat");
const btnSurprise = document.querySelector("#surprise");
const imgContentElement = document.querySelector("#img-container");

const appendImgElement = (src) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'img';
    insertElement('#img-container', img);
}

const insertElement = (father, element) => {
    const fatherToAppend = document.querySelector(father);
    fatherToAppend.appendChild(element);
}

const getCatAPI = () => {
    return fetch('https://aws.random.cat/meow')
        .then((response) => response.json());
};

const getDogAPI = () => {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json());
};

const clearImage = () => {
    const img = document.querySelector(".img");
    if (img) {
        imgContentElement.removeChild(img);
    }
}

const btnRandomDogActive = () => {
    getDogAPI().then((data) => {
        clearImage();
        appendImgElement(data.message);
    });
}

const btnRandomCatActive = () => {
    getCatAPI().then((data) => {
        clearImage();
        appendImgElement(data.file);
    });
}

const randomNumber = () => {
    return Math.floor(Math.random() * 2);
}

const btnSurpriseActive = () => {
    const promises = [getCatAPI(), getDogAPI()];
    const number = randomNumber();
    console.log(number);
    if (number === 0) {
        promises[0].then((data) => {
            clearImage();
            appendImgElement(data.file);
        });
    }
    if (number === 1) {
        promises[1].then((data) => {
            clearImage();
            appendImgElement(data.message);
        });
    }
}

const setListeners = () => {
    btnRandomDog.addEventListener('click', btnRandomDogActive);
    btnRandomCat.addEventListener('click', btnRandomCatActive);
    btnSurprise.addEventListener('click', btnSurpriseActive);
}

setListeners();
