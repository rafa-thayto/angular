import { DaoInterface } from "./DaoInterface";

export class DAO<T> implements DaoInterface<T> {

    nomeTabela: string;
    
    inserir(object: T): boolean {
        console.log('Lógica de insert');
        return true;
    }
    atualizar(object: T): boolean {
        console.log('Lógica update');
        return true;
    }
    remover(id: number): T {
        console.log('Lógica delete');
        return Object();
    }
    selecionar(id: number): T {
        console.log('Lógica select');
        return Object();
    }
    selecionarTodos(): [any] {
        console.log('Lógica getAll');
        return [Object()];
    }

}
