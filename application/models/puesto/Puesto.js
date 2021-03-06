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
      idDepartamento: {
        type: DataTypes.STRING,
        allowNull: true
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },{
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
      tableName: 'Puesto'
    });
    puesto.associate = function( models ){
      puesto.belongsTo( models.Usuario,{ foreignKey:'idPuesto',targetKey:'idPuesto' } );
      puesto.belongsTo( models.Departamento,{ foreignKey: 'idDepartamento', targetKey: 'idDepartamento' } );
    };
    /*puesto.associate = function( models ){
      puesto.hasMany( models.Usuario);
      puesto.hasOne( models.Departamento,{ name:'fk_departamento',field:'idDepartamento'});
    };*/
    return puesto;
  };
