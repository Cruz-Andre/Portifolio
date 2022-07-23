import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0; /** atributo estático */
    agencia;
    _cliente;
    // #saldo = 0 /* O atributo transformado em privado com # não será possivel mexer fora da classe. Mais infos em https://github.com/tc39/proposal-class-fields#private-fields */
    _saldo = 0; /*Atributo privado mas ainda pode mexer. O _ só indica que é um atributo privado (não mexer fora)*/

    /** assessores dos atributos privados */
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    /** assessores dos atributos privados */
    get cliente(){
        return this._cliente;
    }
    
    /** assessores dos atributos privados */
    get saldo(){
        return this._saldo;
    }

    /** construtor para inicializar um(ns) atributo(s) */
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1; /** Contando o nº contas */
    }


    /**
     * Métodos: metodo(){} sinonimo de função.
     */
    sacar(valor){
        if(this._saldo >= valor) { /*palavra chave this é o saldo dessa conta corrente! da conta corrente do usuário que chamou .sacar()*/
            this._saldo = this._saldo - valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return; /* early return Essa técnica consiste em verificarmos todas as situações indesejadas primeiro. Por exemplo, no método depositar() não queremos que o valor recebido seja menor ou igual a zero. Caso isso aconteça, simplesmente usaremos a instrução return para pararmos a execução do código. Dessa maneira, mantemos o código onde a operação realmente é realizada no mesmo nível de indentação da condicional, e conseguimos analisar facilmente que, caso a condição seja verdadeira, sairemos da função sem executá-la. Se todas as verificações passaremos corretamente, o código será executado ao final.*/
        }
        this._saldo = this._saldo + valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
