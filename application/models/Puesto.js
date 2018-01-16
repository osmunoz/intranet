'use strict'
/**
  * Definición del modelo Puesto
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @version 0.0.1
*/
  module.exports = function( sequelize, DataTypes ){
    const puesto = sequelize.define('Puesto',{
      idPuesto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        validate:{
          notNull: true,
          isInt: true,
          isNumeric: true,
        }
      },
      tipoPuesto: {
        type: DataTypes.STRING,
        validate:{ notNull: true }
      },
      idDepto: {
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          is: /^[a-z]+$/i
        }
      },
      descripcion: {
        type: DataTypes.STRING,
        validate: {
          notNull: true
        }
      }
    },{
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      tableName: 'Puesto'
    });
    return puesto;
  };
