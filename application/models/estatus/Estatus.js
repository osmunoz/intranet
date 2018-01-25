  'use strict'
  /**
    * Definicion del modelo Estatus
    * @author Oscar Ivan Muñoz Barajas(Slack)
    * @version 0.0.1
  */
    module.exports = function( sequelize, DataTypes ){
        const estatus = sequelize.define( 'Estatus',{
          idEstatus:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          tipoEstatus: {
            type: DataTypes.STRING,
            allowNull: true
          }
        });
        return estatus;
    };
