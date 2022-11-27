const numbers = [];
for(let index = 25; index >= 1; index--){
    numbers.unshift(index);
}

for(let index = 0; index < numbers.length; index++){
    console.log(numbers[index]/2);
}