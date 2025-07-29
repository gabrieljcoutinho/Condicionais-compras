// Deve imprimir um dos seguintes textos:

//       Frutas: abacaxi
//       Frutas: banana
//       Frutas: uva

//       Frutas: abacaxi e Banana
//       Frutas:  banana e uva
//       Frutas:  abacaxi, banana e uva

//       Legumes: abobrinha
//       Legumes: cenoura
//       Legumes: abobrinha e cenoura

//       Resumo: Comprei somente frutas
//       Resumo: Comprei somente legumes
//       Resumo: Comprei frutas e legumes

//       Resumo: Não comprei nada

// &&(E) --   || (Ou)



const compreiAbacaxi = false;
const compreiBanana = false;
const compreiUva = false;

const compreiBananaEUva = compreiBanana && compreiUva && !compreiAbacaxi;
const compreiAbacaxiEBanana = compreiAbacaxi && compreiBanana;
const compreiTodasAsFrutas = compreiAbacaxi && compreiBanana && compreiUva;


const compreiAbobrinha = false;
const compreiCenoura = false;

const compreiTodosOsLegumes = compreiAbobrinha && compreiCenoura;


// Frutas:
if(compreiTodasAsFrutas){
    console.log("Frutas:   abacaxi, banana e uva");
} else if(compreiBananaEUva){
    console.log("Frutas:   banana e uva");
} else if(compreiAbacaxiEBanana){
    console.log("Frutas: abacaxi e banana");
}else if(compreiAbacaxi){
    // Corrigido: 'comnsole' para 'console'
    console.log("Fruta: abacaxi");
} else if(compreiBanana){
    console.log("Frutas: banana ");
} else if(compreiUva){
    console.log("Frutas: uva");
}

// Legumes:
if(compreiTodosOsLegumes){
    console.log("Legumes: abobrinha e cenoura");
} else if(compreiAbobrinha){
    console.log("Legumes: abobrinhas");
} else if(compreiCenoura){
    console.log("Legumes: cenoura");
}

// Resumo: Variáveis corrigidas para 'comprei'
if ((compreiAbacaxi || compreiBanana || compreiUva) && !(compreiAbobrinha || compreiCenoura)) {
  console.log("Resumo: Comprei somente frutas");
} else if (!(compreiAbacaxi || compreiBanana || compreiUva) && (compreiAbobrinha || compreiCenoura)) {
  console.log("Resumo: Comprei somente legumes");
} else if ((compreiAbacaxi || compreiBanana || compreiUva) && (compreiAbobrinha || compreiCenoura)) {
  console.log("Resumo: Comprei frutas e legumes");
} else {
  console.log("Resumo: Não comprei nada");
}