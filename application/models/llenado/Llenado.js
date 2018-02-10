'use strict'
  /**
    * Modelo para la tabla de llenado
    * @author Oscar Ivan Muñoz Barajas(Slack)
    * @version 0.0.1
  */

    module.exports = function( sequelize, DataTypes ){
      const llenado = sequelize.define('Llenado',{
        idLlenado:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement:true,
          allowNull: false
        },
        idRequisicion:{
          type: DataTypes.INTEGER,
          allowNull: false
        },
        usuarioWindows:{
          type: DataTypes.STRING,
          allowNull: true
        },
        passWindows:{
          type: DataTypes.STRING,
          allowNull: true
        },
        correo:{
          type: DataTypes.STRING,
          allowNull: true
        },
        passCorreo:{
          type: DataTypes.STRING,
          allowNull: true
        },
        ext:{
          type: DataTypes.STRING,
          allowNull: true
        },
        extClave:{
          type: DataTypes.STRING,
          allowNull: true
        },
        equipoCel:{
          type: DataTypes.STRING,
          allowNull: true
        },
        nCelular:{
          type: DataTypes.STRING,
          allowNull: true
        },
        usuarioERP:{
          type: DataTypes.STRING,
          allowNull: true
        },
        passERP:{
          type: DataTypes.STRING,
          allowNull: true
        },
        usuarioSAI:{
          type: DataTypes.STRING,
          allowNull: true
        },
        passSAI:{
          type: DataTypes.STRING,
          allowNull: true
        },
        numeroVendedor:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        zona:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        contratoAuto:{
          type: DataTypes.STRING,
          allowNull: true
        },
        contratoLaptop:{
          type: DataTypes.STRING,
          allowNull: true
        },
        contratoCel:{
          type: DataTypes.STRING,
          allowNull: true
        },
        auxCredito:{
          type: DataTypes.STRING,
          allowNull: true
        },
        recibosCobro:{
          type: DataTypes.STRING,
          allowNull: true
        },
        vendedorCliente:{
          type: DataTypes.STRING,
          allowNull: true
        },
        auxVentas:{
          type: DataTypes.STRING,
          allowNull: true
        },
        areaVentas:{
          type: DataTypes.STRING,
          allowNull: true
        },
        garantiasDev:{
          type: DataTypes.STRING,
          allowNull: true
        }
      },{
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        tableName: 'Llenado'
      });
      return llenado;
    }
