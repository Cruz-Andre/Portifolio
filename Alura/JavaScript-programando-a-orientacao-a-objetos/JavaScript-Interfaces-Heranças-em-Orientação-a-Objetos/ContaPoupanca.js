import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }
    
    /**Sobreescrevendo o comportamento de sacar de Conta */
    sacar(valor){
        const taxa = 1.02;
        return super._sacar(valor, taxa);
    }
}