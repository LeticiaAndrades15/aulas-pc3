const Aluno = require('./escola/Aluno.js');

const joao = new Aluno();

joao.escola = "IFB";
joao.setMatricula(12345);
joao.setCurso("Programacao de FrontEnd");

console.log(joao.getMatricula());
console.log(joao.getCurso());
console.log(`Escola : ${joao.escola}`);
console.log(joao.matricula);