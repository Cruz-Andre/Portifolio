// Classe abstrata pode ser herdada mas não instanciada diretamente

export class Conta {
    /** construtor para inicializar um(ns) atributo(s) */
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    //um método abstrato.
    sacar(valor){
        throw new Error("O método Sacar da Conta é abstrato");

    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo = this._saldo - valorSacado;
            return valorSacado;
        }
        return 0;
    }

    /**
     * Métodos: metodo(){} sinonimo de função.
     */
    depositar(valor){
        if(valor <= 100){
            return; /* early return Essa técnica consiste em verificarmos todas as situações indesejadas primeiro. Por exemplo, no método depositar() não queremos que o valor recebido seja menor ou igual a zero. Caso isso aconteça, simplesmente usaremos a instrução return para pararmos a execução do código. Dessa maneira, mantemos o código onde a operação realmente é realizada no mesmo nível de indentação da condicional, e conseguimos analisar facilmente que, caso a condição seja verdadeira, sairemos da função sem executá-la. Se todas as verificações passaremos corretamente, o código será executado ao final.*/
        }
        this._saldo = this._saldo + valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}