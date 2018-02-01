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
        allowNull: false
      },
      tipoEscolaridad:{
        type: DataTypes.STRING,
        allowNull: true
      }
    },{
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
      tableName: 'Escolaridad'
    });
    /*escolaridad.associate = function( models ){
      escolaridad.hasMany( models.Usuario );
    };*/
    return escolaridad;
  }
