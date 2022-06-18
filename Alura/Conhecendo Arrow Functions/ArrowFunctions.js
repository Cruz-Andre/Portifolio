// Conhecendo Arrow Functions:
// https://www.alura.com.br/artigos/conhecendo-arrow-functions
// Uma escola precisa imprimir uma lista de todos os funcionarios e o código da turma.
// Para realizar essa ação temos a seguinte classe:

class ModuloDeImpressao {
    constructor() {
        this._codigo = 10;
    }
    imprime(nomes) {
        console.log(this._codigo);
        nomes.forEach(nome => {
        console.log(`${this._codigo}: ${nome}`);
     });
   }
}


const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', 'Yan'];
const impressao = new ModuloDeImpressao();
impressao.imprime(professores);