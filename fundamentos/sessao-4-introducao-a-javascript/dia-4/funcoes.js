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

