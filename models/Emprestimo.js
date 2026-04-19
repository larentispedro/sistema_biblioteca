import banco from "../Banco.js";
import { DataTypes } from "sequelize";

const Emprestimo = banco.define("emprestimo", {
  idemprestimo: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  idexemplar: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  idusuario: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  emprestimo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  vencimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  devolucao: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

export default Emprestimo;