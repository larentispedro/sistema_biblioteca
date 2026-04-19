// controllers/EmprestimoController.js
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
  const idexemplar = request.body.idexemplar;
  const idusuario = request.body.idusuario;

  const exemplar = await Exemplar.findByPk(idexemplar);
  if (!exemplar) {
    return response.status(404).send({ erro: "Exemplar não encontrado" });
  }

  if (exemplar.status === 1) {
    return response.status(400).send({ erro: "Exemplar já emprestado para outro usuário" });
  }

  const usuario = await Usuario.findByPk(idusuario);
  if (!usuario) {
    return response.status(404).send({ erro: "Usuário não encontrado" });
  }

  const emprestimo = moment().format('YYYY-MM-DD');
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

  // 1. Verificar se o empréstimo existe
  const emprestimo = await Emprestimo.findByPk(idemprestimo);
  if (!emprestimo) {
    return response.status(404).send({ erro: "Empréstimo não encontrado" });
  }

  // 2. Verificar se já foi devolvido
  if (emprestimo.devolucao !== null) {
    return response.status(400).send({ erro: "Este empréstimo já foi devolvido" });
  }

  // 3. Gravar data de devolução e liberar exemplar
  const devolucao = moment().format('YYYY-MM-DD');
  await emprestimo.update({ devolucao: devolucao });

  const exemplar = await Exemplar.findByPk(emprestimo.idexemplar);
  await exemplar.update({ status: 0 });

  return response.json(emprestimo);
}

export default { listar, selecionar, emprestar, devolver };