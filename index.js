import express from "express";
import banco from "./Banco.js";
import aluno from "./controllers/AlunoController.js";
import usuario from "./controllers/UsuarioController.js";
import obra from "./controllers/ObraController.js";
import exemplar from "./controllers/ExemplarController.js";
import emprestimo from "./controllers/EmprestimoController.js";

try {
  await banco.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const api = express();
api.use(express.json());

api.get("/teste", (request, response) => {
  response.send("Api funcionando");
});

api.get("/aluno", aluno.listar ); 
api.get("/aluno/:matricula", aluno.selecionar );
api.delete("/aluno/:matricula", aluno.excluir);
api.post("/aluno", aluno.inserir );
api.put("/aluno/:matricula", aluno.alterar);

api.get("/usuario", usuario.listar ); 
api.get("/usuario/:idusuario", usuario.selecionar );
api.delete("/usuario/:idusuario", usuario.excluir);
api.post("/usuario", usuario.inserir );
api.put("/usuario/:idusuario", usuario.alterar);

api.get("/obra", obra.listar ); 
api.get("/obra/:idobra", obra.selecionar );
api.delete("/obra/:idobra", obra.excluir);
api.post("/obra", obra.inserir );
api.put("/obra/:idobra", obra.alterar);

api.get("/exemplar", exemplar.listar);
api.get("/exemplar/:idexemplar", exemplar.selecionar);
api.post("/exemplar", exemplar.inserir);
api.delete("/exemplar/:idexemplar", exemplar.excluir);

api.get("/emprestimo", emprestimo.listar);
api.get("/emprestimo/:idemprestimo", emprestimo.selecionar);
api.post("/emprestimo", emprestimo.emprestar);
api.put("/emprestimo/:idemprestimo/devolver", emprestimo.devolver);

api.listen(3000, () => {
  console.log("Api rodando...");
});
