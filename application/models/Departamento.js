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
        validate:{
          isInt: true,
          isNumeric: true,
          notNull: true
        }
      },
      departamento: {
        type: DataTypes.STRING,
        validate:{
          is: /^[a-z]+$/i,
          notNull:true
        }
      },
      logo:{
        type: DataTypes.STRING,
        validate:{
          notNull: false,
          allowNull: true
        }
      }
    },{
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      tableName: 'Departamento'
    });
    return departamento;
  }
