const numero = 5;
let linha = '';

for(let contLinha = 1; contLinha <= numero; contLinha++){
    for(let contColuna = 0; contColuna < contLinha; contColuna++){
        linha = linha + '*';
    }
    console.log(linha);
    linha = '';
}