const array = ['maria', 'joana', 'mario'];
console.log(...array);

//object destructuring
const person = {
    nome: 'Dhiego',
    birthMonth: 'May',
    age: 35,
}

const {nome, birthMonth: aniversario, age: idade} = person;
console.log(aniversario);