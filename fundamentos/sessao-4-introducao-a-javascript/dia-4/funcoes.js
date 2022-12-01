// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false
function palindromeVerify(word){
    if(word === word.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
}

let word = 'amor';
if(palindromeVerify(word)){
    console.log("É palíndromo");
}else{
    console.log("Não é palíndromo");
}

//  2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4.

function indexBiggestReturn(array){
    let biggestNumber = array[0];
    let index = 0;
    for(let key in array){
        if(array[key] > biggestNumber){
            biggestNumber = array[key];
            index = key;
        }
    }
    return index;
}
let array = [2, 3, 30, 7, 10, 31];
console.log(indexBiggestReturn(array));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.

function indexMoreLessReturn(array){
    let biggestNumber = array[0];
    let index = 0;
    for(let key in array){
        if(array[key] < biggestNumber){
            biggestNumber = array[key];
            index = key;
        }
    }
    return index;
}

let array = [2, 4, 6, 7,-5, 10, 0, -3];
console.log(indexMoreLessReturn(array));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// Valor esperado no retorno da função: Fernanda.

function mostChar(array){
    let bigger = array[0];
    for(let value of array){
        if(value.length > bigger.length){
            bigger = value;
        }
    }
    return bigger;
}

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'CairoCastroBolivar', 'Joana'];
console.log(mostChar(array));