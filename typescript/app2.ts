import Carro from './Carro';
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';

// Criar carros
let carroA = new Carro('Golf GT', 4);
let carroB = new Carro('Veloster', 2);
let carroC = new Carro('Lamborgini', 2);

// Mostrar a lista de carros da concessionaria
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);

// Exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros());

// Comprar Carro
let cliente = new Pessoa('Rafael', 'Golf GT');
// console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {

        // Commpra o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
