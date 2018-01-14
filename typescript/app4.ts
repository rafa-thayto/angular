// import { ConcessionariaDAO } from './ConcessionariaDAO';
// import { PessoaDAO } from './PessoaDAO';

import Concessionaria from './Concessionaria'; 
import Pessoa from './Pessoa';
import { DAO } from './DAO';

// let dao: ConcessionariaDAO = new ConcessionariaDAO();
// let dao2: PessoaDAO = new PessoaDAO();


let concessionaria: Concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('', '');

let dao3: DAO<Concessionaria> = new DAO<Concessionaria>();
let dao4: DAO<Pessoa> = new DAO<Pessoa>();

dao3.inserir(concessionaria);

dao4.remover(5);
