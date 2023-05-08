'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Therapists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Therapists.init({
    name: DataTypes.STRING,
    specialties: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Therapists',
  });
  return Therapists;
};