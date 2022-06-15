console.log("Trabalhando com Criando Listas");
//marcação de string com crase para interpolar variáveis. chamada de Template strings
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

// adicionando um item na lista
listaDeDestinos.push(`Curitiba`);

console.log("Destinos possíveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

// removendo itens na lista
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

// mostrando um item específico da lista de itens
console.log(listaDeDestinos[1]);
console.log(listaDeDestinos[1], listaDeDestinos[0]);
