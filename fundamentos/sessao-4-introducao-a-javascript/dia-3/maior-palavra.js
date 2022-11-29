let array = ['java', 'javascript', 'python', 'html', 'css'];

let indexOfBiggest = 0;

for(let index = 1; index < array.length; index++){
    if(array[index].length > array[indexOfBiggest].length){
        indexOfBiggest = index;
    }
}

console.log(array[indexOfBiggest]);