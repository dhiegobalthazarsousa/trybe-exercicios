window.onload = () => {
    backGroundListenerEvent();
    fontColorListenerEvent();
    fontSizeListenerEvent();
    lineHeightListenerEvent();
    initialize();
}
//GLOBAL VARIABLES
let elementContent = document.querySelector('.content');

//FUNCTIONS WHO DO LISTENERS
const backGroundListenerEvent = () => {
    let elements = getButtons('#background-color');
    for (let element of elements) {
        element.addEventListener("click", (event) => {
            setBackGroundColor(event.target.innerHTML);
        });
    }
}

const fontColorListenerEvent = () => {
    let elements = getButtons('#font-color');
    for (let element of elements) {
        element.addEventListener("click", (event) => {
            setFontColor(event.target.innerHTML);
        });
    }
}

const fontSizeListenerEvent = () => {
    let elements = getButtons('#font-size');
    for (let element of elements) {
        element.addEventListener("click", (event) => {
            setFontSize(event.target.innerHTML);
        });
    }
}

const lineHeightListenerEvent = () => {
    let elements = getButtons('#line-height');
    for (let element of elements) {
        element.addEventListener("click", (event) => {
            setLineHeight(event.target.innerHTML);
        });
    }
}


//FUNCTIONS WHO SET ELEMENTS
const setBackGroundColor = (color) => {
    elementContent.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}

const setFontColor = (color) => {
    elementContent.style.color = color;
    localStorage.setItem('fontColor', color);
}

const setFontSize = (size) => {
    elementContent.style.fontSize = size;
    localStorage.setItem('fontSize', size);
}

const setLineHeight = (height) => {
    elementContent.style.lineHeight = height;
    localStorage.setItem('lineHeight', height);
}

//FUNCTIONS WHO INICIALIZE
const initialize = () => {
    elementContent.style.backgroundColor = localStorage.getItem('backgroundColor');
    elementContent.style.color = localStorage.getItem('fontColor');
    elementContent.style.fontSize = localStorage.getItem('fontSize');
    elementContent.style.lineHeight = localStorage.getItem('lineHeight');
}

//FUNCTIONS WHO GET ELEMENTS
const getButtons = (key) => document.querySelectorAll(key + '>button');

// <!-- <script>
//     window.onload = () => {
//       const setBackgroundColor = (color) => {
//         let content = document.querySelector(".content")
//         content.style.backgroundColor = color
//         localStorage.setItem("backgroundColor", color)
//       }

//       const setFontColor = (color) => {
//         let paragraphs = document.querySelectorAll(".paragraph")
//         for (let index = 0; index < paragraphs.length; index += 1) {
//           paragraphs[index].style.color = color
//         }
//         localStorage.setItem("fontColor", color)
//       }


//       const setFontSize = (size) => {
//         let paragraphs = document.querySelectorAll(".paragraph")
//         for (let index = 0; index < paragraphs.length; index += 1) {
//           paragraphs[index].style.fontSize = size
//         }
//         localStorage.setItem("fontSize", size)
//       }

//       const setLineHeight = (height) => {
//         let paragraphs = document.querySelectorAll(".paragraph")
//         for (let index = 0; index < paragraphs.length; index += 1) {
//           paragraphs[index].style.lineHeight = height
//         }
//         localStorage.setItem("lineHeight", height)
//       }

//       const setFontFamily = (family) => {
//         let paragraphs = document.querySelectorAll(".paragraph")
//         for (let index = 0; index < paragraphs.length; index += 1) {
//           paragraphs[index].style.fontFamily = family
//         }
//         localStorage.setItem("fontFamily", family)
//       }

//       // Cor de fundo da tela;

//       let backgroundColorButtons = document.querySelectorAll("#background-color>button")
//       for (let index = 0; index < backgroundColorButtons.length; index += 1) {
//         backgroundColorButtons[index].addEventListener("click", (event) => {
//           setBackgroundColor(event.targ  et.innerHTML)
//         })
//       }

//       // Cor do texto;
//       let fontColorButtons = document.querySelectorAll("#font-color>button")
//       for (let index = 0; index < fontColorButtons.length; index += 1) {
//         fontColorButtons[index].addEventListener("click", (event) => {
//           setFontColor(event.target.innerHTML)
//         })
//       }

//       // Tamanho da fonte
//       let fontSizeButtons = document.querySelectorAll("#font-size>button")
//       for (let index = 0; index < fontSizeButtons.length; index += 1) {
//         fontSizeButtons[index].addEventListener("click", (event) => {
//           setFontSize(event.target.innerHTML)
//         })
//       }

//       // Espaçamento entre as linhas do texto;
//       let lineHeightButtons = document.querySelectorAll("#line-height>button")
//       for (let index = 0; index < lineHeightButtons.length; index += 1) {
//         lineHeightButtons[index].addEventListener("click", (event) => {
//           setLineHeight(event.target.innerHTML)
//         })
//       }

//       // Tipo da fonte (_Font family_).
//       let fontFamilyButtons = document.querySelectorAll("#font-family>button")
//       for (let index = 0; index < fontFamilyButtons.length; index += 1) {
//         fontFamilyButtons[index].addEventListener("click", (event) => {
//           setFontFamily(event.target.innerHTML)
//         })
//       }

//       const initialize = () => {
//         let backgroundColor = localStorage.getItem("backgroundColor")
//         if (backgroundColor) setBackgroundColor(backgroundColor)

//         let fontColor = localStorage.getItem("fontColor")
//         if (fontColor) setFontColor(fontColor)

//         let fontSize = localStorage.getItem("fontSize")
//         if (fontSize) setFontSize(fontSize)

//         let lineHeight = localStorage.getItem("lineHeight")
//         if (lineHeight) setLineHeight(lineHeight)

//         let fontFamily = localStorage.getItem("fontFamily")
//         if (fontFamily) setFontFamily(fontFamily)
//       }

//       initialize()
//     }
//   </script> -->