console.log("Trabalhando com Atribuição de Variáveis");

const idade = 29; // const para variáveis que não variam o conteúdo.
const primeiroNome = "Andre";
const sobrenome = "Cruz";

console.log(primeiroNome + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(primeiroNome + " " + sobrenome);

//marcação de string com crase para interpolar variáveis. chamada de Template strings
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + sobrenome;

console.log(nomeCompleto);