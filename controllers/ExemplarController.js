import Exemplar from "../models/Exemplar.js";
import Obra from "../models/Obra.js";

async function listar(request, response) {
  const dados = await Exemplar.findAll();
  return response.json(dados);
}

async function selecionar(request, response) {
  const idexemplar = request.params.idexemplar;
  const dados = await Exemplar.findByPk(idexemplar);
  return response.json(dados);
}

async function excluir(request, response) {
  const idexemplar = request.params.idexemplar;

  const dados = await Exemplar.destroy({
    where: { idexemplar }
  });

  return response.json(dados);
}

async function inserir(request, response) {
  const idobra  = request.body.idobra;

  //verificar se a obra não existe
  const obra = await Obra.findByPk(idobra);
  if (!obra) {
    return response.status(404).send('Obra não encontrada.');
  }

  const dados = await Exemplar.create({
    idobra : idobra,
  });

  return response.json(dados);
}

export default { listar, selecionar, inserir, excluir};