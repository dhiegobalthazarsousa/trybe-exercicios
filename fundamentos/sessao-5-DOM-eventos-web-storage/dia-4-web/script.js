let header = document.querySelector('#header');
const backgroundColors = ['white', 'black', 'green', 'blue', 'yellow'];

window.onload = () => {
    header.appendChild(createSection('bg-color-section'));
    addButton(backgroundColors, '.bg-color-section');
}

const addButton = (list, className) =>{
    let section = document.querySelector(className);
    for(let value of list){
        let button = createButton();
        button.innerHTML = value;
        section.appendChild(button);
    }
}
const createButton = () => document.createElement('button');
const createSection = (className) => {
    let section = document.createElement('section');
    section.className = className;
    return section;
}