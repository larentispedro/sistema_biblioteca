import Obra from "../models/Obra.js";

async function listar (request, response) {
  const dados = await Obra.findAll();
  return response.json(dados);
}

async function selecionar (request, response) {
  const idobra = request.params.idobra;
  const dados = await Obra.findByPk(idobra);
  return response.json(dados);
}

async function excluir (request, response) {
  const idobra = request.params.idobra;
  const dados = await Obra.destroy({ where: { idobra: idobra } });
  return response.json(dados);
}

async function inserir(request, response) {
  const {
    titulo,
    autor,
    isbn,
    editora,
    publicacao,
    edicao,
    categoria,
    foto
  } = request.body;

  const dados = await Obra.create({
    titulo,
    autor,
    isbn,
    editora,
    publicacao,
    edicao,
    categoria,
    foto
  });

  return response.json(dados);
}


async function alterar(request, response) {
  const idobra = request.params.idobra;

  const {
    titulo,
    autor,
    isbn,
    editora,
    publicacao,
    edicao,
    categoria,
    foto
  } = request.body;

  const dados = await Obra.update(
    {
      titulo,
      autor,
      isbn,
      editora,
      publicacao,
      edicao,
      categoria,
      foto
    },
    { where: { idobra } }
  );

  return response.json(dados);
}

export default { listar, selecionar, excluir, inserir, alterar };