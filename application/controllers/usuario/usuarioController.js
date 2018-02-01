'use strict'
//variables
  const enigma      =     require( 'enigma-code' );
  const models      =     require( '../../models/' );
  const emails      =     require( '../mails/sendTo.js' );
  //function index
  function index( object, req, res ){
    models.Puesto.findAll({}).then( function( puestos ){
      models.Escolaridad.findAll({}).then( function( escuela ){
        models.Departamento.findAll({}).then( function( departamento ){console.log("Uno");
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
      let sexo = "";
      if( req.body.sexo === 'H' )
        sexo = 'H';
      if( req.body.sexo === 'M' )
        sexo = 'M';
      models.Usuario.create({
        numeroEmpleado: req.body.numeroEmpleado.trim(),
        fecha_nacimiento: req.body.fecha_nacimiento.trim(),
        sexo: sexo,
        foto: '/fotos/'+req.body.nombreUsuario.trim()+'.jpg',
        direccion: req.body.direccion.trim(),
        nombre_completo: req.body.nombreUsuario.trim(),
        telefono: req.body.telefono.trim(),
        correo: req.body.correo.trim(),
        ext_tel: req.body.ext_tel.trim(),
        password: encript( req.body.password.trim() ),
        idPuesto: req.body.puesto.trim(),
        idExamen: 0,
        idEscolaridad: req.body.escuela.trim(),
        RFC: req.body.rfc.trim(),
        CURP: req.body.curp.trim(),
        tipoSangre: req.body.tipoSangre.trim(),
        idAcceso:8,
        fecha_registro: Date.now(),
        numeroIMSS: req.body.numeroIMSS.trim(),
        aceptado: 0
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
      fuera = hash;
    });
    return fuera;
  }
  /**
    * En esta funcion, se revisara, si el usuario se encuentra registrado, y ademas esta ya
    * activado, en caso de que se encuentre todo correcto, se inicializara una cookie
    * para el transcurso del usuario dentro del sistema, se abrira el panel de control
    * que podra ver, en caso de que no, se mandara un mensaje por via del ajax, en el cual
    * abrira un modal explicando el error al usuario.
    * @param object
    * @param req
    * @param res
    * @return cookie and true or false
    * @throws sequelize error or coockie-parser
    * @author Oscar Ivan Muñoz Barajas(Slack)
  */
  function login( object, req, res ){
    let user = req.body.user;
    let pass = encript( req.body.pass );
    let obj = {};
    let comprobado = false;
    // se hace la consulta a la DB para comprobar que exista el usuario
    models.Usuario.findAll({
      where: {
        correo: user,
        password: pass,
        aceptado:1
      },
      attributes:['idUsuario','nombre_completo','correo','aceptado','fecha_registro','numeroEmpleado','password'],
      include:[
        {
          model: models.Puesto,
          attributes:[ 'tipoPuesto' ],
          include:[
            {
              model: models.Departamento,
              attributes:['departamento']
            }
          ]
        },{
          model: models.Acceso,
          attributes: ['tipoAcceso','nombreAcceso']
        }
      ]
    }).then( function( encontrado ) {
      if( JSON.stringify( encontrado ) != '[]' ){
        encontrado.forEach( function( element ){
          if( element.password.trim() === pass ){
            if( element.aceptado === 1 ){
              comprobado = true;
              obj ={
                nombre: element.nombre_completo,
                mini: '/preview/'+element.nombre_completo.trim()+'thumb.jpg',
                num: element.numeroEmpleado,
                correo: element.correo,
                comprobado: comprobado
              };
              res.render('panelTodo',{obj:obj});
            }else{
              console.log("Por el momento, el equipo aun no ha aceptado su solicitud");
            }
          }else{ res.redirect('/no=register'); }
        });
      }else{ res.redirect('/no=no'); }
    });
  }
  /**
    * Esta funcion hace llenar un JSON, para llenar la cookie
    * y así usarla como se desee
    * @param {user}
    * @param {pass}
    * @return JSON
    * @throws sequelize error
  */
  function llenado_cookie( user, pass ){
    let galleta = {};
    models.Usuario.findAll({

    }).then( function( data ){
      return data;
      /*data.forEach( function( element ){
        galleta = element;
      });
      return galleta;*/
    });
  }
  //Se exportan las funciones
  exports.index = index;
  exports.registro = registro;
  exports.login = login;
