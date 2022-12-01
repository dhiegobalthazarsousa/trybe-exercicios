let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info2 = {
    personagem: 'Tio Patinha',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

//   console.log("Bem vinda " + info.personagem);
info['recorrente'] = 'SIM';

for(let key in info){
    if(key !== 'recorrente'){
        console.log(info[key] + ' e ' + info2[key]);
    }
}
if(info['recorrente'].toLowerCase() === 'sim' && info2['recorrente'].toLowerCase() === 'sim'){
    console.log("Ambos recorrentes");
}
// console.log(info);

// for(let key in info){
//     console.log(key);
// }

// for(let key in info){
//     console.log(info[key]);
// }