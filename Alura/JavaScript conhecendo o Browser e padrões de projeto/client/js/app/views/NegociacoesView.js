class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(modelo) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${modelo.negociacoes.map(negociacao => {
                        return `
                            <tr>
                                <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
                
                <tfoot>
                    <td colspan="3"></td>
                    <td>${
                            //assistir os vídeos Totalizando o volume...
                            modelo.negociacoes.reduce((total, n) => {
                                return total + n.volume;
                            }, 0.0)
                        }
                    </td>
                </tfoot>
            </table>
        `;
    }
}