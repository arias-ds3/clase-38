'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Author.init({
    id_author: {  // 🔹 Asegurar que el nombre del campo coincide
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    full_name: {  // 🔹 Coincide con FULL_NAME en la BD
      type: DataTypes.STRING,
      allowNull: false
    },
    date_of_birth: {  // 🔹 Coincide con DATE_OF_BIRTH
      type: DataTypes.DATE,
      allowNull: true
    },
    date_of_death: {  // 🔹 Coincide con DATE_OF_DEATH
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'author',  // ⚠️ Debe coincidir con el nombre exacto de la tabla en la BD
    modelName: 'Author',  // Sequelize usa esto para acceder al modelo en `db.Author`
    timestamps: false     // Si no usas createdAt y updatedAt
  });

  return Author;
};