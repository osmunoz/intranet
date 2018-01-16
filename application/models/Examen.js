'use strict'
/**
  * Definición del modelo Examen
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @version 0.0.1
*/

  module.exports = function( sequelize, DataTypes ){
    const examen = sequelize.define( 'Prospecto',{
      idExamen: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        validate:{
          notNull: true,
          isNumeric: true,
          isInt: true
        }
      },
      idProspecto:{
        type: DataTypes.INTEGER,
        validate:{
          notNull: true,
          isNumeric: true,
          isInt: true
        }
      },
      idUsuario:{
        type: DataTypes.INTEGER,
        validate:{
          notNull: false,
          allowNull: true,
          isNumeric: true,
          isInt: true
        }
      },
      tituloExamen: {
        type: DataTypes.STRING,
        validate:{ notNull: true }
      },
      enfoque_a_resultado: {
        type: DataTypes.FLOAT,
        validate:{
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      trabajo_bajo_presion: {
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      planeacion_y_organizacion: {
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      liderazgo:{
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      desarrollo_de_colaboradores: {
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      trabajo_en_equipo: {
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      capacidad_de_analisis: {
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      toma_de_decisiones: {
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      supervision_de_procesos:{
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      delegacion: {
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      comunicacion: {
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      juicio_autonomia:{
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      espiritu_de_servicio: {
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      estabilidad_emocional:{
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      socioeconomico:{
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      total:{
        type: DataTypes.FLOAT,
        validate: {
          notNull: true,
          isFloat: true,
          noEmpty: true
        }
      },
      IQ:{
        type:DataTypes.INTEGER,
        validate:{
          notNull: true,
          isNumeric: true,
          isInt: true,
          noEmpty: true
        }
      }
    },{
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      tableName: 'Examen'
    });
    return examen;
  };
