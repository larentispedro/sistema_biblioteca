import Usuario from "../models/Usuario.js";

async function listar (request, response) {
  const dados = await Usuario.findAll();
  return response.json(dados);
}

async function selecionar (request, response) {
  const idusuario = request.params.idusuario;
  const dados = await Usuario.findByPk(idusuario);
  return response.json(dados);
}

async function excluir (request, response) {
  const idusuario = request.params.idusuario;
  const dados = await Usuario.destroy({ where: { idusuario: idusuario } });
  return response.json(dados);
}

async function inserir(request, response) {
  const nome = request.body.nome;
  const matricula = request.body.matricula;
  const email = request.body.email;
  const perfil = request.body.perfil;
  const status = request.body.status;

  const dados = await Usuario.create({
    nome: nome,
    matricula: matricula,
    email: email,
    perfil: perfil,
    status: status,
  });
  return response.json(dados);
}

async function alterar(request, response) {
  // metodo misto
  //route
  const idusuario = request.params.idusuario;
  //body
  const nome = request.body.nome;
  const matricula = request.body.matricula;
  const email = request.body.email;
  const perfil = request.body.perfil;
  const status = request.body.status;

  const dados = await Usuario.update(
    {
      nome: nome,
      email: email,
      matricula: matricula,
      perfil: perfil,
      status: status,
    },
    { where: { idusuario: idusuario } },
  );
  return response.json(dados);
}

export default { listar, selecionar, excluir, inserir, alterar };