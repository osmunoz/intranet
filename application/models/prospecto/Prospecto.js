'use strict'
/**
  * Se define el modelo de la tabla prospectos
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @version 0.0.1
*/
  module.exports = function( sequelize, DataTypes ){
    const prospectos = sequelize.define( 'Prospecto',{
      idProspecto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nombre_completo:{
        type: DataTypes.STRING,
        allowNull: true
      },
      fecha_nacimiento:{
        type: DataTypes.DATE,
        allowNull: true
      },
      domicilio:{
        type: DataTypes.STRING,
        allowNull: true
      },
      correo:{
        type: DataTypes.STRING,
        allowNull: false
      },
      fecha_registro:{
        type: DataTypes.DATE,
        allowNull: true
      },
      idEstatus:{
        type: DataTypes.INTEGER,
        allowNull: true
      },
      idPuesto:{
        type: DataTypes.INTEGER,
        allowNull: true
      },
      idExamen:{
        type: DataTypes.INTEGER,
        allowNull: true
      },
      idEscolaridad: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },{
      classMethods: {
        associate: function( models ){
          prospectos.hasOne( models.Estatus,{ foreingKey: 'idEstatus' } );
          prospectos.hasOne( models.Puesto ,{ foreingKey: 'idPuesto' } );
          prospectos.hasOne( models.Examen ,{ foreingKey: 'idExamen' } );
          prospectos.hasOne( models.Escolaridad ,{ foreingKey: 'idEscolaridad' } );
        }
      }
    });
    return prospectos;
  };
