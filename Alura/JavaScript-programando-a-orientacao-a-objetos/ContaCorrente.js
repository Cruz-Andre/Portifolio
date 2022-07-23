import { Conta } from "./JavaScript-Interfaces-Heranças-em-Orientação-a-Objetos/Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0; /** atributo estático */
    constructor(cliente, agencia){
        super(0, cliente, agencia); //chama o construtor da Conta (da classe pai)
        ContaCorrente.numeroDeContas += 1; /** Contando o nº contas */
    }

    /**Sobreescrevendo o comportamento de sacar de Conta */
    sacar(valor){
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}
