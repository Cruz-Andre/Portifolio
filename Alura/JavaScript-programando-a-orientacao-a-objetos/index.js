import { Cliente } from "./Cliente.js";
import { Gerente } from "./JavaScript-Interfaces-Heranças-em-Orientação-a-Objetos/Funcionarios/gerente.js";
import { Diretor } from "./JavaScript-Interfaces-Heranças-em-Orientação-a-Objetos/Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./JavaScript-Interfaces-Heranças-em-Orientação-a-Objetos/SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 1234567900);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Ricardo", 5000, 1234512300);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 11122233344, "456")

const gerenteEstaLogado =  SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado =  SistemaAutenticacao.login(diretor, "123456789");

const clienteEstaLogado =  SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
