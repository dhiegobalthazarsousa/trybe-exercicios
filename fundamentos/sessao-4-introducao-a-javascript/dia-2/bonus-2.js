let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const newNumbers = [];
for(let atual = 0; atual<numbers.length; atual++){
    let posterior = atual + 1;
    if(posterior < numbers.length){
        newNumbers.push(numbers[atual]*numbers[posterior]);
    }else{
        newNumbers.push(numbers[atual]*2);
    }
}
console.table(newNumbers);