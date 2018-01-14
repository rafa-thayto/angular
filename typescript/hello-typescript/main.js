var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
// ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3]; // ES 5
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); // ES 6
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// Tipagem de variáveis em typescript
var n1 = 'askdjkas';
n1 = 4;
