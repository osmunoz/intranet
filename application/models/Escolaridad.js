  'use strict'
/**
  * Definicion del modelo Escolaridad
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @version 0.0.1
*/
  module.exports = function( sequelize, DataTypes ){
    const escolaridad = sequelize.define( 'Escolaridad',{
      idEscolaridad:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        validate:{
          isInt: true,
          isNumeric: true,
          notNull: true
        }
      },
      tipoEscolaridad:{
        type: DataTypes.STRING,
        validate:{
          is: /^[a-z]+$/i,
          notNull: true
        }
      }
    },{
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      tableName: 'Escolaridad'
    });
    return escolaridad;
  }
