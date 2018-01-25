'use strict'
/**
  * Definición del modelo Puesto
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @version 0.0.1
*/

  module.exports = function( sequelize, DataTypes ) {
    const puesto = sequelize.define('Puesto',{
      idPuesto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      tipoPuesto: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      idDepto: {
        type: DataTypes.STRING,
        allowNull: true
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },{
      classMethods:{
        associate: function( models ){
          puesto.hasOne( models.Departamento,{ foreingKey: 'idDepto' } );
        }
      }
    });
    return puesto;
  };
