const numero = 5;
let linha = '';
for(let contLinha = 0; contLinha < numero; contLinha++){
    for(let contColuna = 0; contColuna < numero; contColuna++){
        linha = linha + '*';
    }
    console.log(linha);
    linha = '';
}