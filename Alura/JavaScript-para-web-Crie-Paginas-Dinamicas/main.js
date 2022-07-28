function tocaSom(idTagAudio) {
    const som = document.querySelector(idTagAudio);

    if(som != null && som.localName === 'audio') {
        console.log(som);
        console.log(som.localName);
        console.log(som.localName === 'audio');
        som.play();
    }
    else {
        console.log("elemento não encotrado ou seletor inválido");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let index = 0; index < listaDeTeclas.length; index++) {
    const tecla = listaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
        //console.log(evento.code);
        if(evento.code === 'Enter' || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}

// let contador = 0;
// while (contador < listaDeTeclas.length) {
//     const tecla = listaDeTeclas[contador]

//                         /* o numero 1 entre colchetes é a segunda class dentro do button. 
//                          * class[0] é a class="tecla" e class[1] é a tecla_pom, tecla_clap e assim por endiante.
//                          */
//     const instrumento = tecla.classList[1];
//         //console.log(instrumento); instrumento está armazenando a 2ª classe para depois montar as id dos sons.

//     //template string
//     const idAudio = `#som_${instrumento}`;
//         //console.log(idAudio); idAudio está armazenando cada id (completa) correspondente aos sons

//                     //função anonima
//     tecla.onclick = function() {tocaSom(idAudio)}
//     contador++;
// }
