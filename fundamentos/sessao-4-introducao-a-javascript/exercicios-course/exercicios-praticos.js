let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for(let index = 0; index < numbers.length; index++){
    // console.log(numbers[index]);
    soma += numbers[index];
}

let media = soma/numbers.length;
// console.log(media);
if (media>20) {
    console.log("Valor maior que vinte!!!");
}else{
    console.log("valor menor ou igual a vinte!!!!!");
}