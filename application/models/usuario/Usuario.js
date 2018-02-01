  'use stric'

/**
  * Se hara la definición del modelo, para así poder hacer las consultas a la DB
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @version 0.0.1
*/
  // se comienza a definir el modelo, despues de haber creado la conexion a la db
  module.exports = function( sequelize, DataTypes ){
    const usuario = sequelize.define( 'Usuario',{
      idUsuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
      },
      numeroEmpleado:{
        type: DataTypes.INTEGER,
        unique: {
          args: true,
          msg:'Este cambio, \'numeroEmpleado\' debe de ser unico, valor repetido'
        },
        allowNull: false,
      },
      fecha_nacimiento:{
        type: DataTypes.DATE,
        allowNull: false,
      },
      sexo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      foto: {
        type: DataTypes.STRING,
        allowNull: true
      },
      direccion:{
        type: DataTypes.STRING,
        allowNull: false
      },
      nombre_completo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ext_tel: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      idPuesto: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      idExamen:{
        type: DataTypes.INTEGER,
        allowNull: true
      },
      idEscolaridad:{
        type: DataTypes.INTEGER,
        allowNull: true
      },
      RFC:{
        type: DataTypes.STRING,
        allowNull: false
      },
      CURP: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipoSangre:{
        type:DataTypes.STRING,
        allowNull: true
      },
      idAcceso:{
        type:DataTypes.INTEGER,
        allowNull: false
      },
      numeroIMSS:{
        type:DataTypes.STRING,
        unique: {
          args: true,
          msg:'Este cambio, \'numeroIMSS\' debe de ser unico, valor repetido'
        },
        allowNull: false
      },
      aceptado:{
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },{
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
      tableName: 'Usuario'
    });
    usuario.associate = function( models ){
      usuario.belongsTo( models.Puesto,{ foreignKey:'idPuesto', targetKey:'idPuesto'} );
      usuario.belongsTo( models.Acceso, { foreignKey:'idAcceso', targetKey: 'idAcceso' } );
    };
    return usuario;
  };
