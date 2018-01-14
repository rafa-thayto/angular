import { Veiculo } from './Veiculo';

export default class Moto extends Veiculo {
    
    constructor() {
        super();

    }
     
    public acelerar(): void {
        this.velocidade += 20;
    }

}
