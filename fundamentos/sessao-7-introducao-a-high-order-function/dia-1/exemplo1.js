const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((value, index) => {
    pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase();
});

console.log(pessoasAprovadas);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((element) => {
  console.log(`${element} X 2 = ${element * 2}`); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
});

//---------------------------------------------------------------//

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado no banco de dados`);
});