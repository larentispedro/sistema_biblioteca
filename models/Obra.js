import banco from "../Banco.js";
import { DataTypes } from "sequelize";

const Obra = banco.define("obra", {
  // Model attributes are defined here
  idobra: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false
  },
  editora: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publicacao: {
    type: DataTypes.INTEGER,
    allowNull: false
  }, 
  edicao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  foto: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

export default Obra;