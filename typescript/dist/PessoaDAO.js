"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDAO.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    PessoaDAO.prototype.atualizar = function (object) {
        console.log('Lógica update');
        return true;
    };
    PessoaDAO.prototype.remover = function (id) {
        console.log('Lógica delete');
        return new Pessoa_1.default('', '');
    };
    PessoaDAO.prototype.selecionar = function (id) {
        console.log('Lógica select');
        return new Pessoa_1.default('', '');
    };
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [new Pessoa_1.default('', '')];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
