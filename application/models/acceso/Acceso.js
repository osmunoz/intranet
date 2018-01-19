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
        validate: {
          isInt: true,
          isNumeric: true,
          notNull: true
        }
      },
      tipoAcceso: {
        type: DataTypes.INTEGER,
        validate:{
          isInt: true,
          isNumeric: true,
          notNull: true
        }
      },
      nombreAcceso:{
        type: DataTypes.STRING,
        validate:{
          notNull: true,
          max: 21
        }
      },
      tipoUsuario:{
        type: DataTypes.INTEGER,
        validate:{
          notNull: true
        }
      }
    });
    return acceso;
  };
