// //ordena em ordem crescente
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (array[index] < array[secondIndex]) {
//             let position = array[index];
//             array[index] = array[secondIndex];
//             array[secondIndex] = position;
//         }
//     }
// }
// console.table(array);

//ordena em ordem decrescente alterei o sinal
// const array = [40, 33, 81, 74, 93, 1, 4, 28]
// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (array[index] > array[secondIndex]) {
//             let position = array[index];
//             array[index] = array[secondIndex];
//             array[secondIndex] = position;
//         }
//     }
// }
// console.table(array);

//esse código é o meu algoritmo -> mas o anterior é mais eficiente, pois leva menos tempo para ser finalizado
// let troca = 1;
// while(troca !== 0){
//     troca = 0;
//     for(let atual = 1; atual < array.length; atual++){
//         let anterior = atual - 1;
//         if (array[atual] < array[anterior]) {
//             let position = array[atual];
//             array[atual] = array[anterior];
//             array[anterior] = position;
//             troca = 1;
//         }
//     }
// }
// console.table(array);