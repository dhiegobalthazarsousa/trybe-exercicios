const numero1 = 90;
const numero2 = 60;
const numero3 = 49;

if(numero1 > numero2 && numero2 > numero3){
    console.log("Numero 1 é o maior!");
}else if(numero3 > numero2 && numero2 > numero1){
    console.log("Numero 3 é o maior");
}else{
    console.log("Numero 2 é o maior");
}