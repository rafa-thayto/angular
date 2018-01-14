var minhaVar = 'minha variavel';

function minhaFunc(x, y) {
    return x + y;
}

// ES 6 ou ES 2015
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3]; // ES 5
numeros.map(function(valor) {
    return valor * 2;
});
numeros.map(valor => valor * 2); // ES 6

class Matematica {
    soma(x, y) {
        return x + y;
    }
}

// Tipagem de variáveis em typescript
var n1: any = 'askdjkas';
n1 = 4;
