let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let count = 0;

for(let index = 0; index < numbers.length; index++){
    let value = numbers[index];
    if(value % 2 !== 0){
        count++;
    }
}
console.log(count);