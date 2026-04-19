import banco from "../Banco.js";
import { DataTypes } from "sequelize";

const Usuario = banco.define("usuario", {
  // Model attributes are defined here
  idusuario: {
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
    allowNull: false
  },
  matricula: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  perfil: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Usuario;