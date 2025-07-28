

const compreAbacaxi = true;
const compreiBanana = true;
const compreiUva = true;

const compreiAbobrinha = true;
const compreiCenoura = true;



const compreiAbacaxiEBanana = compreAbacaxi && compreiBanana;
const compreiBananaEUva = compreiBanana && compreiUva;
const compreiAbacaxiEUva = compreAbacaxi && compreiUva;


const compreiTodasAsFrutas = compreAbacaxi && compreiBanana && compreiUva;

const compreiTodosOsLegumes = compreiAbobrinha && compreiCenoura;


const compreiSomenteFrutas = compreiTodasAsFrutas && !compreiTodosOsLegumes;
const compreiSomenteLegumes = compreiTodosOsLegumes && !compreiTodasAsFrutas;
const compreiFrutasELegumes = compreiTodasAsFrutas && compreiTodosOsLegumes;



if (compreiFrutasELegumes) {
    console.log("Resumo: Comprei frutas e legumes");
} else if (compreiSomenteFrutas) {
    console.log("Resumo: Comprei somente frutas");
} else if (compreiSomenteLegumes) {
    console.log("Resumo: Comprei somente legumes");
} else if (compreiTodasAsFrutas) {
    console.log("Frutas: abacaxi, banana e uva");
} else if (compreiTodosOsLegumes) {
    console.log("Legumes: abobrinha e cenoura");
} else if (compreiAbacaxiEBanana) {
    console.log("Frutas: abacaxi e Banana");
} else if (compreiBananaEUva) {
    console.log("Frutas: banana e uva");
} else if (compreiAbacaxiEUva) {
    console.log("Frutas: abacaxi e uva");
} else if (compreAbacaxi) {
    console.log("Frutas: abacaxi");
} else if (compreiBanana) {
    console.log("Frutas: banana");
} else if (compreiUva) {
    console.log("Frutas: uva");
} else if (compreiAbobrinha) {
    console.log("Legumes: abobrinha");
} else if (compreiCenoura) {
    console.log("Legumes: cenoura");
} else {
    console.log(" Não comprei nada");
}