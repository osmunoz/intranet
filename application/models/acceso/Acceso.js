/**
  * Definicion del modelo de acceso
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @version 0.0.1
*/
  module.exports = function( sequelize, DataTypes ){
    const acceso = sequelize.define( 'Acceso',{
      idAcceso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      tipoAcceso: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      nombreAcceso:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      tipoUsuario:{
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    },{
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
      tableName: 'Acceso'
    });
    acceso.associate = function( models ){
      acceso.belongsTo( models.Usuario,{ foreignKey:'idAcceso', targetKey: 'idAcceso' } );
    };
    return acceso;
  };
