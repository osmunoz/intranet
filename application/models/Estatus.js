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
            validate:{
              isInt: true,
              isNumeric: true,
              notNull:true
            }
          },
          tipoEstatus: {
            type: DataTypes.STRING,
            validate: {
              is: /^[a-z]+$/i
              notNull: true
            }
          }
        },{
          timestamps: true,
          paranoid: true,
          freezeTableName: true,
          tableName: 'Estatus'
        });
        return estatus;
    };
