const salarioBruto = 3000.00;
let salarioDescontadoInss = 0;
let salarioLiquido = 0;

if(salarioBruto < 1556.95){
    let inss = 0.08;
    salarioDescontadoInss = salarioBruto - (salarioBruto * inss);
}else if(salarioBruto < 2594.93){
    let inss = 0.09;
    salarioDescontadoInss = salarioBruto - (salarioBruto * inss);
}else if(salarioBruto < 5189.82){
    let inss = 0.11;
    salarioDescontadoInss = salarioBruto - (salarioBruto * inss);
}else{
    salarioDescontadoInss = salarioBruto - (salarioBruto * 570.88);
}

if(salarioDescontadoInss >= 1903.99 && salarioDescontadoInss <= 2826.65){
    let ir = 0.075;
    salarioLiquido = salarioDescontadoInss - ((salarioDescontadoInss * ir) - 142.80);
}else if(salarioDescontadoInss >= 2826.66 && salarioDescontadoInss <= 3751.05){
    let ir = 0.15;
    salarioLiquido = salarioDescontadoInss - ((salarioDescontadoInss * ir) - 354.80);
}else if(salarioDescontadoInss >= 3751.06 && salarioDescontadoInss <= 4664.68){
    let ir = 0.225;
    salarioLiquido = salarioDescontadoInss - ((salarioDescontadoInss * ir) - 636.13);
}else if(salarioDescontadoInss > 4664.68){
    let ir = 0.275;
    salarioLiquido = salarioDescontadoInss - ((salarioDescontadoInss * 570.88)-869.36);
}

console.log(salarioLiquido.toFixed(2));
