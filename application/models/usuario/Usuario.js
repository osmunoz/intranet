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
        autoIncrement:true,
        validate: {
          notNull: true,
          isNumeric: true,
          isInt: true
        }
      },
      numeroEmpleado:{
        type: DataTypes.INTEGER,
        unique: {
          args: true,
          msg:'Este cambio, \'numeroEmpleado\' debe de ser unico, valor repetido'
        },
        validate: { notNull: true }
      },
      fecha_nacimiento:{
        type: DataTypes.DATE,
        validate:{ notNull: true }
      },
      sexo: {
        type: DataTypes.STRING,
        validate:{ notNull: true }
      },
      foto: {
        type: DataTypes.STRING,
        validate:{ notNull: false }
      },
      nombre_completo: {
        type: DataTypes.STRING,
        validate: { is: /^[a-z]+$/i, notNull: true }
      },
      telefono: {
        type: DataTypes.STRING,
        validate: {
          notNull: false,
          not: ["[a-z]","i"]
        }
      },
      correo: {
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          isEmail: true
        }
      },
      ext_tel: {
        type: DataTypes.STRING,
        validate: {
          notNull: false
        }
      },
      fecha_registro: {
        type: DataTypes.DATE,
        validate:{ notNull: true }
      },
      password: {
        type: DataTypes.STRING,
        validate:{ notNull:true }
      },
      idPuesto: {
        type: DataTypes.INTEGER,
        validate:{
          notNull: true,
          isNumeric: true,
          isInt: true
        }
      },
      idExamen:{
        type: DataTypes.INTEGER,
        validate:{
          notNull: true,
          isNumeric: true,
          isInt: true
        }
      },
      idEscolaridad:{
        type: DataTypes.INTEGER,
        validate:{
          notNull:true,
          isNumeric:true,
          isInt: true
        }
      },
      RFC:{
        type: DataTypes.STRING,
        validate: { notNull: true }
      },
      CURP: {
        type: DataTypes.STRING,
        validate:{ notNull:true }
      },
      tipoSangre:{
        type:DataTypes.STRING,
        validate:{
          notNull:false,
          allowNull: true
        }
      },
      idAcceso:{
        type:DataTypes.INTEGER,
        validate:{
          notNull:true,
          isNumeric:true,
          isInt:true
        }
      },
      numeroIMSS:{
        type:DataTypes.STRING,
        unique: {
          args: true,
          msg:'Este cambio, \'numeroIMSS\' debe de ser unico, valor repetido'
        },
        validate:{ notNull:true }
      }
    },{
      classMethods:{
        associate: function( models ){
          usuario.hasOne( models.Acceso, { foreingKey: 'idAcceso' });
          usuario.hasMany( models.Escolaridad, { foreingKey: 'idEscolaridad'});
          usuario.hasMany( models.Examen, { foreingKey: 'idExamen'});
          usuario.hasOne( models.Puesto, { foreingKey: 'idPuesto' } );
        }
      }
    });
    return usuario;
  };
