import './style.css';

//1246391099280574

const btnRandomElement = document.querySelector('#random');
const pElement = document.querySelector('#hero-name');
const imgElement = document.querySelector('#img-hero');

const getHero = (id) => {
    return fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
    .then((response) => response.json());
}

const getNumber = () => {
    return Math.floor(Math.random() * 730);
};

const setName = (name) => {
    pElement.innerHTML = name;
}

const printImage = (imgPath) => {
    imgElement.src = imgPath;
}

const btnSelectHero = () => {
    btnRandomElement.addEventListener('click', (event) => {
        event.preventDefault();
        const number = getNumber();
        getHero(number).then((data) => {
            setName(data.name);
            printImage(data.images.md);
        });
    });
}

btnSelectHero();