let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   console.log("Bem vinda " + info.personagem);
info['recorrente'] = 'SIM';
// console.log(info);

// for(let key in info){
//     console.log(key);
// }

for(let key in info){
    console.log(info[key]);
}