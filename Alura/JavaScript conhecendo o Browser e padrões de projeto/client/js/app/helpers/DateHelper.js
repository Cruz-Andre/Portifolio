class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }

    //vídeo métodos estáticos
    static textoParaData(texto) {
        //vídeo template string
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-')
            .map((item, indice) => {
                // return item - indice % 2; mais enxuto que com if e assistir o video Arrow Functions...
                if(indice === 1) {
                    return item - 1;
                }
                return item;
            })
        )
    }

    static dataParaTexto(data) {
        //vídeo template string
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }
}
