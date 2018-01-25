'use strict'
/**
  * Definicion del modelo Departamento
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @version 0.0.1
*/
  module.exports = function( sequelize, DataTypes ){
    const departamento = sequelize.define( 'Departamento',{
      idDepartamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      departamento: {
        type: DataTypes.STRING,
        allowNull: true
      },
      logo:{
        type: DataTypes.STRING,
        allowNull: true
      }
    });
    return departamento;
  }
