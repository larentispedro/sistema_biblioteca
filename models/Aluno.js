import banco from "../Banco.js";
import { DataTypes } from "sequelize";

const Aluno = banco.define("aluno", {
  // Model attributes are defined here
  matricula: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
});

export default Aluno;