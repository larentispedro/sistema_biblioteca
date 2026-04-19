import Emprestimo from "../models/Emprestimo.js";
import Exemplar from "../models/Exemplar.js";
import Usuario from "../models/Usuario.js";
import moment from "moment";

async function listar(request, response) {
  const dados = await Emprestimo.findAll();
  return response.json(dados);
}

async function selecionar(request, response) {
  const idemprestimo = request.params.idemprestimo;
  const dados = await Emprestimo.findByPk(idemprestimo);
  return response.json(dados);
}

async function emprestar(request, response) {
  const idexemplar = request.body.idexemplar
  const idusuario = request.body.idusuario

  //verficar se o exemplar não existe
  const exemplar = await Exemplar.findByPk(idexemplar);
  if (!exemplar) {
    return response.status(404).send({ erro: "Exemplar não encontrado" });
  }

  //verificar se o exemplar está disponível
  if (exemplar.status === 1) {
    return response.status(400).send({ erro: "Exemplar já emprestado para outro usuário" });
  }

   //verficar se o usuário não existe
  const usuario = await Usuario.findByPk(idusuario);
  if (!usuario) {
    return response.status(404).send({ erro: "Usuário não encontrado" });
  }

  //data de emprestimo
  const emprestimo = moment().format('YYYY-MM-DD');
  //data de vencimento com +7 dias
  const vencimento = moment().add(7, 'days').format('YYYY-MM-DD');

  const dados = await Emprestimo.create({
    idexemplar: idexemplar,
    idusuario: idusuario,
    vencimento: vencimento,
    emprestimo: emprestimo
  });

  await exemplar.update({ status: 1 });

  return response.json(dados);
}

async function devolver(request, response) {
  const idemprestimo = request.params.idemprestimo;

  // validar se o empréstimo existe
  const emprestimo = await Emprestimo.findByPk(idemprestimo);
  if (!emprestimo) {
    return response.status(404).send({ erro: "Empréstimo não encontrado" });
  }

  // validar se já foi devolvido anteriormente
  if (emprestimo.devolucao) {
    return response.status(400).send({ erro: "Empréstimo já foi devolvido anteriormente" });
  }

  // se pendente, grava data de devolução
  const devolucao = moment().format("YYYY-MM-DD");
  await emprestimo.update({ devolucao: devolucao });

  // mudar status do exemplar para disponível (0)
  const exemplar = await Exemplar.findByPk(emprestimo.idexemplar);
  if (exemplar) {
    await exemplar.update({ status: 0 });
  }

  return response.json(emprestimo);
}

export default { listar, selecionar, emprestar, devolver };
