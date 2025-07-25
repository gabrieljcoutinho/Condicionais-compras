// Deve imprimir um dos seguintes textos:

//      Frutas: Nenhuma
//      Frutas: abacaxi ------------------------------- feito
//      Frutas: banana --------------------------------feito
//      Frutas: uva ------------------------------------- feito
//      Frutas: abacaxi e Banana  ------------------feito
//      Frutas:  banana e uva ------------------------feito
//      Frutas:  abacaxi, banana e uva ------------feito

//      Legumes: Nenhum
//      Legumes: abobrinha  ----------------- feito
//      Legumes: cenoura --------------------- feito
//      Legumes: abobrinha e cenoura

//      Resumo: Comprei somente frutas  ---------------feito
//      Resumo: Comprei somente legumes -------------feito
//      Resumo: Comprei frutas e legumes -------------- feito

//      Resumo: Não comprei nada ------------------- feito




const compreiAbacaxi = true;
const compreiBanana = true;
const compreiUva = true;

const compreiAbobrinha = true;
const compreiCenoura = true;

const compreiFrutasELegumes = compreiAbacaxi && compreiBanana && compreiUva && compreiAbobrinha && compreiCenoura;
const compreiSomenteFrutas = compreiAbacaxi && compreiBanana && compreiUva
const sompreiSomenteLegumes = compreiAbobrinha && compreiCenoura

if (compreiFrutasELegumes) {
    console.log("Comprei frutas e legumes");
} else if(compreiSomenteFrutas){
    console.log("Comprei somente frutas")
} else if(sompreiSomenteLegumes){
    console.log("Comprei somente legumes")
}else if (compreiAbacaxi && compreiBanana && compreiUva && !compreiAbobrinha && !compreiCenoura) {
    console.log("Frutas: abacaxi, banana e uva");
}else if (!compreiAbacaxi && !compreiBanana && !compreiUva && compreiAbobrinha && compreiCenoura) {
    console.log("Comprei abobrinha e cenoura");
}
else if (compreiAbacaxi && compreiBanana) {
    console.log("Frutas: abacaxi e banana");
} else if (compreiBanana && compreiUva) {
    console.log("Frutas: banana e uva");
} else if (compreiAbacaxi && compreiUva){
        console.log("Frutas: abacaxi e uva");
}
else if (compreiAbacaxi) {
    console.log("Frutas: abacaxi");
} else if (compreiBanana) {
    console.log("Fruta: banana");
} else if (compreiUva) {
    console.log("Fruta: uva");
} else if(compreiAbobrinha){
    console.log("Legumes: abobrinha")
}  else if(compreiCenoura){
    console.log("Legumes: cenoura")
}


else {
    console.log("Não comprei nada");
}
