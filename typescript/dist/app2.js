"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
// Criar carros
var carroA = new Carro_1.default('Golf GT', 4);
var carroB = new Carro_1.default('Veloster', 2);
var carroC = new Carro_1.default('Lamborgini', 2);
// Mostrar a lista de carros da concessionaria
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av. Paulista', listaDeCarros);
// Exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros());
// Comprar Carro
var cliente = new Pessoa_1.default('Rafael', 'Golf GT');
// console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // Commpra o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
