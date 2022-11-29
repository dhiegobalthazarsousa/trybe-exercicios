const palavra = 'amor';
let palavraTrocada = '';
for(let contador = palavra.length - 1; contador >= 0; contador--){
    palavraTrocada = palavraTrocada + palavra[contador];
}
console.log(palavraTrocada);
