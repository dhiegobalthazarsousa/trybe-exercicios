const numero = 5;
let linha = '';
for(let contLinha = 1; contLinha <= numero; contLinha++){
    for(let contColuna = 1; contColuna <= numero; contColuna++){
        if(contColuna <= numero-contLinha){
            linha = linha + ' ';    
        }else{
            linha = linha + '*';
        }
    }
    console.log(linha);
    linha = '';
}