'use strict'
/**
  * Se define el modelo de la tabla prospectos
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @version 0.0.1
*/
  module.exports = function( sequelize, DataTypes ){
    const prospectos = sequelize.define( 'Prospecto',{
      idProspecto:{
        types: DataTypes.INTEGER,
        primaryKey: true,
        validate:{
          isNumber:{
            args:true,
            msg: 'El valor idProspecto debe de ser numerico y asignado por el sistema'
          },
          isInt: true,
          notNull: true
        }
      },
      nombre_completo:{
        type: DataTypes.STRING,
        validate:{ notNull: true }
      },
      fecha_nacimiento:{
        type: DataTypes.DATE,
        validate:{ notNull: true }
      }
      domicilio:{
        type: DataTypes.STRING,
        validate:{ notNull:true }
      },
      correo:{
        type: DataTypes.STRING,
        validate:{
          isEmail:{
            args: true,
            msg: 'El correo ya se registro hace tiempo'
          }
        }
      },
      fecha_registro:{
        type: DataTypes.DATE,
        validate:{ notNull: true }
      },
      idEstatus:{
        type: DataTypes.INTEGER,
        validate:{ notNull: true }
      },
      idPuesto:{
        type: DataTypes.INTEGER,
        validate:{
          notNull: true,
          isNumeric: true,
          isInt: true
        }
      },
      idExamen:{
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          isNumeric: true,
          isInt: true
        }
      }
      idEscolaridad: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          isNumeric: true,
          isInt: true
        }
      }
    },{
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      tableName: 'Prospecto'
    });
    return prospectos;
  };
