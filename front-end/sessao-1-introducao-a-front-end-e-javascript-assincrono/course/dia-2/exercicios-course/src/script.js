/* 
// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = generateRandomNumber();
            resolve(randomNumber);
        }, 1000);
    });
 
// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = generateRandomNumber();
            reject(new Error(`O número ${randomNumber} é inválido.`));
        }, 1000);
    });
const resolvedPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = generateRandomNumber();
        resolve(number);
    }, 1000);
});


resolvedPromise()
    .then((response) => {
        console.log(`caralho ${response}`);
    })

rejectedPromise().then((response) => {
    console.log(`O número gerado é ${response}`)
}); */

// ____________________________________________________________________________________________________________


