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
        autoIncrement: true,
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
      classMethod:{
        associate: function(models){
          puesto.hasOne( models.Departamento, { foreingKey: 'idDepto' })
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
