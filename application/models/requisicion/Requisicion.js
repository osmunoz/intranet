'use strict'
/**
  * Se crea el modelo de la requisición
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @version 0.0.1
*/

  module.exports = function( sequelize, DataTypes ){
      const requisicion = sequelize.define( 'Requisicion',{
        idRequiere:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement:true,
          allowNull: false
        },
        idProspecto:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        noEmpleadoHizo:{
          type: DataTypes.INTEGER,
          allowNull: false
        },
        fecha:{
          type: DataTypes.DATE,
          allowNull: false
        },
        nombreCompleto:{
          type: DataTypes.STRING,
          allowNull: false
        },
        noEmpleado:{
          type: DataTypes.INTEGER,
          allowNull: false
        },
        puesto:{
          type: DataTypes.STRING,
          allowNull: false
        },
        area:{
          type: DataTypes.STRING,
          allowNull: true
        },
        urlFoto:{
          type: DataTypes.STRING,
          allowNull: false
        },
        domicilio:{
          type: DataTypes.STRING,
          allowNull: false
        },
        gcia:{
          type: DataTypes.STRING,
          allowNull: false
        },
        depto:{
          type: DataTypes.STRING,
          allowNull: false
        },
        cambioDepto:{
          type: DataTypes.STRING,
          allowNull: true
        },
        equipo:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        windows:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        correo:{
          type: DataTypes.INTEGER,
          allowNull:true
        },
        sai:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        zona:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ext:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        web:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        skype:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        intelisis:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        numVendedor:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        auto:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        laptop:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        celular:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        auxCredito:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        cobro:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        muestras:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        venta:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        areaVenta:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        almacen:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        estatus:{
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },{
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        tableName: 'Requisicion'
      });
      return requisicion;
  }
