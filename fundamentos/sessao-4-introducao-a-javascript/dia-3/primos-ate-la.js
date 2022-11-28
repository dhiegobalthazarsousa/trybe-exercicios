const numero = 50;
const primos = [];
for(let index = 2; index <= numero; index++){
    let contador = 0;
    for(let count = 1; count <= index; count++){
        if(index % count === 0){
            contador++;
        }
    }
    if(contador <= 2){
        primos.push(index);
    }
}
console.log(primos);