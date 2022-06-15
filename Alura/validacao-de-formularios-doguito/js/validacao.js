export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    }
    else {
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio'
    },
    email: {
        valueMissing: 'O campo de e-mail não pode estar vazio',
        typeMismatch: 'O e-mail digitado não é válido'
    },
    senha: {
        valueMissing: 'O campo da senha não pode estar vazio',
        patternMismatch: 'Password validator Requires 6-20 characters including at least 1 upper or lower alpha, and 1 digit.'
    },
    dataNascimento: {
        valueMissing: 'O campo da data de nascimento não pode estar vazio',
        customError: 'Você deve ter mais que 18 anos para se cadastrar'
    },
    cpf: {
        valueMissing: 'O campo do CPF não pode estar vazio',
        customError: 'O CPF digitado não é valido'
    },
    cep: {
        valueMissing: 'O campo do CEP não pode estar vazio',
        patternMismatch: 'O CEP digitado não é válido',
        customError: 'CEP não consta no banco de dados'
    },
    logradouro: {
        valueMissing: 'O campo do Logradouro não pode estar vazio'

    },
    cidade: {
        valueMissing: 'O campo da Cidade não pode estar vazio'
    },
    estado: {
        valueMissing: 'O campo do Estado não pode estar vazio'
    },
    preco: {
        valueMissing: 'O campo do preço não pode estar vazio'
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input),
    cpf:input => validaCPF(input),
    cep:input => recuperarCEP(input)
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    })

    return mensagem;
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value);
    let mensagem = '';
    
    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ter mais que 18 anos para se cadastrar';
    }

    input.setCustomValidity(mensagem);
}

function maiorQue18(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataAtual;
}

function validaCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g, '');
    let mensagem = '';

    if (!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
        mensagem = 'O CPF digitado não é valido'
    }

    input.setCustomValidity(mensagem);
}

function checaCPFRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    let cpfValido = true;

    valoresRepetidos.forEach(valor => {
        if (valor == cpf) {
            cpfValido = false;
        }
    })

    return cpfValido;
}

function checaEstruturaCPF(cpf) {
    const multiplicador = 10;

    return checaDigitoVerificador(cpf, multiplicador);
}

function checaDigitoVerificador(cpf, multiplicador) {
    if (multiplicador >= 12) {
        return true;
    }
    let multiplicadorInicial = multiplicador;
    let soma = 0;
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('');
    const digitoVerificador = cpf.charAt(multiplicador - 1);
    for (let contador = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial;
        contador++;
    }

    if (digitoVerificador == confirmaDigito(soma)) {
        return checaDigitoVerificador(cpf, multiplicador + 1);
    }

    return false;
}

function confirmaDigito(soma) {


    return 11 - (soma % 11);
}

function recuperarCEP(input) {
    const cep = input.value.replace(/\D/g, '');
    const url = `https://viacep.com.br/ws/${cep}/json`;
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'aplication/jason;charset=utf-8'
        }
    }
    if (!input.validity.patternMismatch && !input.validity.valueMissing) {
        fetch(url,options).then(
            response => response.json()
        ).then(
            data => {
                if(data.erro) {
                    input.setCustomValidity('CEP não consta no banco de dados');
                    return;
                }
                input.setCustomValidity('');
                preencheCamposComCEP(data);
                return;
            }
        )
    }
}

function preencheCamposComCEP(data) {
    const logradouro = document.querySelector('[data-tipo="logradouro"]');
    const cidade = document.querySelector('[data-tipo="cidade"]');
    const estado = document.querySelector('[data-tipo="estado"]');

    logradouro.value = data.logradouro;
    cidade.value = data.localidade;
    estado.value = data.uf;
}

