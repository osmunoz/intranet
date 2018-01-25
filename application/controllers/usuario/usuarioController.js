'use strict'
//variables
  const enigma      =     require( 'enigma-code' );
  const models      =     require( '../../models/' );
  const emails      =     require( '../mails/sendTo.js' );
  //function index
  function index( object, req, res ){
    models.Puesto.findAll({}).then( function( puestos ){
      models.Escolaridad.findAll({}).then( function( escuela ){
        models.Departamento.findAll({}).then( function( departamento ){
          res.render( 'addingUser', { puesto: puestos, escuela: escuela, departamento: departamento } );
        });
      });
    });
  }
  /**
    * En esta función, se va a obtener todo lo que se mande por post
    * y se acomodara para que se registre en la respectiva tabla,
    * cuando se haga el registro automaticamente, se enviara un
    * email para que el usuario sepa, que se registro correctamente
    * y el departamento encargado lo tiene que aceptar
    *
    * @param objet
    * @param req
    * @param res
  */
    function registro( objet, req, res ){
      console.log("Correo: "+ JSON.stringify( req.body ) );
      let sexo = "";
      if( req.body.sexo === 'H' )
        sexo = 'H';
      if( req.body.sexo === 'M' )
        sexo = 'M';
      models.Usuario.create({
        numeroEmpleado: req.body.numeroEmpleado,
        fecha_nacimiento: req.body.fecha_nacimiento,
        sexo: sexo,
        foto: '/src/assets/fotos/'+req.body.nombreUsuario+'.jpg',
        direccion: req.body.direccion,
        nombre_completo: req.body.nombreUsuario,
        telefono: req.body.telefono,
        correo: req.body.correo,
        ext_tel: req.body.ext_tel,
        password: encript( req.body.password ),
        idPuesto: req.body.puesto,
        idExamen: 0,
        idEscolaridad: req.body.escuela,
        RFC: req.body.rfc,
        CURP: req.body.curp,
        tipoSangre: req.body.tipoSangre,
        idAcceso:8,
        fecha_registro: Date.now(),
        numeroIMSS: req.body.numeroIMSS,
        aceptado: 1
      }).then( function( hecho ){
        if( hecho )
          emails.send( req.body.correo, 'Bienvenida', res );
      });
    }
  /**
    * funcion encripto
    * esta funcion funcionara para encriptar la contraseña
    *
    * @param contrasena
    * @return encript
  */
  function encript( contrasena ){
    let seed = "F3rr3t3";
    let valor = 911;
    let fuera = "";
    enigma.genHash( valor,seed,contrasena, function( err, hash ){
      if( err ) return console.log( err );
      console.log( hash );
      fuera = hash;
    });
    return fuera;
  }
  //Se exportan las funciones
  exports.index = index;
  exports.registro = registro;
