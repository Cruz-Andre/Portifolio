class Negociacao {

    constructor(data, quantidade, valor) {
        
        //Programação defensiva. Imutabilidade
        this._data = new Date(data.getTime());
        
        this._quantidade = quantidade;
        this._valor = valor;
        
        // Nós usaremos um artifício existente há algum tempo na linguagem JavaScript: "congelaremos" um objeto e com isso, qualquer alteração nas suas propriedades será ignorada. Isso funcionará no caso da classe Negociacao, porque nem mesmo os métodos da classe podem alterar as propriedades de uma negociação criada.
        Object.freeze(this);
    }

    get data() {
        //Programação defensiva. Imutabilidade
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}
