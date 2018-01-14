"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDAO.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    ConcessionariaDAO.prototype.atualizar = function (object) {
        console.log('Lógica update');
        return true;
    };
    ConcessionariaDAO.prototype.remover = function (id) {
        console.log('Lógica delete');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log('Lógica select');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDAO;
}());
exports.ConcessionariaDAO = ConcessionariaDAO;
