let numbers = [5, 9, 3, 19, 70, 8, 100, 0, 35, 27];
let menor = numbers[0];

for(let index = 1; index < numbers.length; index++){
    let value = numbers[index];

    if(menor > value){
        menor = value;
    }
}

console.log(menor);