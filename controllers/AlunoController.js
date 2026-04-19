import Aluno from "../models/Aluno.js";

async function listar (request, response) {
  const dados = await Aluno.findAll();
  response.json(dados);
}

async function selecionar (request, response) {
  const matricula = request.params.matricula;
  const dados = await Aluno.findByPk(matricula);
  return response.json(dados);
}

async function excluir (request, response) {
  const matricula = request.params.matricula;
  const dados = await Aluno.destroy({ where: { matricula: matricula } });
  return response.json(dados);
}

async function inserir (request, response) {
  const matricula = request.params.matricula;

  const nome = request.body.nome;
  const email = request.body.email;
  const dados = await Aluno.update({ nome: nome, email: email });
  return response.json(dados);
}

async function alterar (request, response) {
  const matricula = request.params.matricula;

  const nome = request.body.nome;
  const email = request.body.email;
  const dados = await Aluno.update(
    { nome: nome, email: email },
    { where: { matricula: matricula } },
  );
  return response.json(dados);
}

export default { listar, selecionar, excluir, inserir, alterar };