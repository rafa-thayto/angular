"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
    }
    DAO.prototype.inserir = function (object) {
        console.log('Lógica de insert');
        return true;
    };
    DAO.prototype.atualizar = function (object) {
        console.log('Lógica update');
        return true;
    };
    DAO.prototype.remover = function (id) {
        console.log('Lógica delete');
        return Object();
    };
    DAO.prototype.selecionar = function (id) {
        console.log('Lógica select');
        return Object();
    };
    DAO.prototype.selecionarTodos = function () {
        console.log('Lógica getAll');
        return [Object()];
    };
    return DAO;
}());
exports.DAO = DAO;
