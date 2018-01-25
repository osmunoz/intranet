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
        autoIncrement: true,
        allowNull: false
      },
      idProspecto:{
        type: DataTypes.INTEGER,
        allowNull: true
      },
      idUsuario:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tituloExamen: {
        type: DataTypes.STRING,
        allowNull: true
      },
      enfoque_a_resultado: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      trabajo_bajo_presion: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      planeacion_y_organizacion: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      liderazgo:{
        type: DataTypes.FLOAT,
        allowNull: true
      },
      desarrollo_de_colaboradores: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      trabajo_en_equipo: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      capacidad_de_analisis: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      toma_de_decisiones: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      supervision_de_procesos:{
        type: DataTypes.FLOAT,
        allowNull: true
      },
      delegacion: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      comunicacion: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      juicio_autonomia:{
        type: DataTypes.FLOAT,
        allowNull: true
      },
      espiritu_de_servicio: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      estabilidad_emocional:{
        type: DataTypes.FLOAT,
        allowNull: true
      },
      socioeconomico:{
        type: DataTypes.FLOAT,
        allowNull: true
      },
      total:{
        type: DataTypes.FLOAT,
        allowNull: true
      },
      IQ:{
        type:DataTypes.INTEGER,
        allowNull: true
      }
    });
    return examen;
  };
