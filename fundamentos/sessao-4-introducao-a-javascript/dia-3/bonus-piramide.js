const numero = 5;
let linha = '';
let isOdd = true;
const middle = parseInt((numero/2).toFixed());
let diferenca = 0;

for(let contLinha = 1; contLinha <= numero; contLinha += 2){
    isOdd = contLinha % 2 !== 0?true:false;
    for(let contColuna = 1; contColuna <= numero; contColuna++){
        
        if(contLinha > 1){
            diferenca = parseInt((contLinha/2).toFixed()-contLinha);
        }
        if(contColuna  === middle || contColuna === middle - diferenca || contColuna === middle + diferenca){
            linha = linha + '*';
        }else if(contLinha === numero){
            linha = linha + '*';
        }else{
            linha = linha + ' ';
        }
    }
    console.log(linha);
    linha = '';
}