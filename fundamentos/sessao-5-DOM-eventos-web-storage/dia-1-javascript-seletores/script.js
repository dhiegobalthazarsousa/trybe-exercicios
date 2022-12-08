function paragraphWrite(){
    document.querySelectorAll(".center-content p")[1].innerText = 'Daqui a dois anos eu me vejo trabalhando como dev em uma multinacional, fora do país';
}
paragraphWrite();

function alterColor(color){
    const mainContent = document.querySelector(".main-content");
    mainContent.style.backgroundColor = color;
}
alterColor('rgb(76,164,109)');

function toWhite(){
    const element = window.document.body.getElementsByClassName('center-content')[0];
    element.style.backgroundColor = "white";
}
toWhite();

const alterH1 = () => {document.getElementsByTagName('h1')[0].innerText = "Desafio - Javascript";}
alterH1();

function toUpperCaseMonster(){
    document.getElementsByTagName('p')[0].style.textTransform = 'uppercase';
}
toUpperCaseMonster();

