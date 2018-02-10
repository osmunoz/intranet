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
              attributes:['idDepartamento','departamento']
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
                correo: element.correo.trim(),
                comprobado: element.aceptado,
                acceso: element.Acceso.nombreAcceso,
                departamento: element.Puesto.Departamento.departamento,
                wdepa: element.Puesto.Departamento.idDepartamento
              };
              res.cookie( 'logueado',obj );
              res.render('panelTodo',req.cookies);
            }else{
              console.log("Por el momento, el equipo aun no ha aceptado su solicitud");
            }
          }else{ res.redirect('/no=register'); }
        });
      }else{ res.redirect('/no=no'); }
    });
  }
  /**
    * En esta funcion, se va a moder ver la información de la cuenta del usuario, se cargara todo en formularios
    * @param object
    * @param res
    * @param req
  */
  function cuenta( object, req, res ){
    models.Usuario.findAll().then( function( users ){
      models.Puesto.findAll({
        attributes:[ 'idPuesto', 'tipoPuesto','idDepartamento' ]
      }).then( function( puestos ){
        models.Escolaridad.findAll({
          attributes:[ 'idEscolaridad','tipoEscolaridad' ]
        }).then( function( escuela ){
          models.Departamento.findAll({
            attributes:[ 'idDepartamento', 'departamento' ]
          }).then( function( departamento ){
            let usuario = {};
            users.forEach( function( data ){
              usuario = {
                nombre: data.nombre_completo.trim(),
                pic: '/preview/'+data.nombre_completo.trim()+'thumb.jpg',
                numero: data.numeroEmpleado,
                direccion: data.direccion.trim(),
                telefono: data.telefono.trim(),
                rfc: data.RFC.trim(),
                curp: data.CURP.trim(),
                imss: data.numeroIMSS.trim(),
                tipoSangre: data.tipoSangre,
                ext: data.ext_tel.trim(),
                correo: data.correo.trim()
              };
            });
            res.render( 'cuenta', {  logueado: JSON.stringify( req.cookies.logueado ), usuario:usuario, puesto: puestos, escuela: escuela, departamento: departamento } );
          });
        });
      });
    });
  }
  function requisicion( object, req, res ){
    let requis = req.cookies.logueado.correo+'; '+'soporte@indar.com.mx';
    let equipo = ( req.body.equipo === "on" )?1:0;
    let windows = ( req.body.windows === "on" )?1:0;
    let correo = ( req.body.correo === "on" )?1:0;
    let sai = ( req.body.sai === "on" )?1:0;
    let zona = ( req.body.zona === "on" )?1:0;
    let ext = ( req.body.ext === "on" )?1:0;
    let web = ( req.body.web === "on" )?1:0;
    let skype = ( req.body.skype === "on" )?1:0;
    let intelisis = ( req.body.intelisis === "on" )?1:0;
    let numVende = ( req.body.numVende === "on" )?1:0;
    let auto = ( req.body.auto === "on" )?1:0;
    let laptop = ( req.body.laptop === "on" )?1:0;
    let celular = ( req.body.celular === "on" )?1:0;
    let auxCredito = ( req.body.auxCredito === "on" )?1:0;
    let cobro = ( req.body.cobro === "on" )?1:0;
    let muestras = ( req.body.muestras === "on" )?1:0;
    let ventas = ( req.body.ventas === "on" )?1:0;
    let areaVenta = ( req.body.areaVenta === "on" )?1:0;
    let almacen = ( req.body.almacen === "on" )?1:0;
    let domicilio = req.body.domicilio.trim()+' '+req.body.numDom+' '+req.body.coli.trim()+' '+req.body.ciudad.trim()+' '+req.body.estado.trim();
    models.Requisicion.create({
      idProspecto: 0,
      noEmpleadoHizo: req.cookies.logueado.num,
      fecha: req.body.fecha,
      nombreCompleto: req.body.nombre.trim(),
      noEmpleado: req.body.numeroEmpleado,
      puesto: req.body.puesto.trim(),
      area: req.body.areas.trim(),
      urlFoto: '/preview/'+req.body.nombre.trim()+'pre.jpg',
      domicilio: domicilio,
      gcia: req.body.gcia.trim(),
      depto: req.body.deptos.trim(),
      cambioDepto: req.body.cambios.trim(),
      equipo: equipo,
      windows: windows,
      correo: correo,
      sai: sai,
      zona: zona,
      ext: ext,
      web: web,
      skype: skype,
      intelisis: intelisis,
      numVendedor: numVende,
      auto: auto,
      laptop: laptop,
      celular: celular,
      auxCredito: auxCredito,
      cobro: cobro,
      muestras: muestras,
      venta: ventas,
      areaVenta: areaVenta,
      almacen: almacen,
      estatus:0
    }).then( function( hecho ){
      let correos = req.cookies.correo+';'+'soporte@indar.com.mx';
      if( hecho ){
        emails.send( requis, 'Requisicion', res );
        res.redirect('/requisicion');
      }
    });
  }
  function datosRequisicion( object, req, res ){
    let datos = {};
    let regresa = models.Requisicion.findAll({
      where:{ estatus: 0 },
      attributes: ['idRequiere','noEmpleadoHizo','noEmpleado','urlFoto','nombreCompleto','puesto','area','estatus']
    }).then( function( data ){
        regresa = data;
    });
    console.log("Regresa: "+JSON.stringify( regresa ) );
    return regresa;
  }
  function llenado( object, req, res ){
    /*models.Llenado.create({
      idRequisicion:,
      usuarioWindows:,
      passWindows:,
      correo:,
      passCorreo:,
      ext:,
      extClave:,
      equipoCel:,
      nCelular:,
      usuarioERP:,
      passERP:,
      usuariSAI:,
      passSAI:,
      numeroVendedor:,
      zona:,
      contratoAuto:,
      contratoLaptop:,
      contratoCel:,
      auxCredito:,
      recibosCobro:,
      vendedorCliente:,
      auxVentas:,
      areaVentas:,
      garantiasDev:,
    }).then( function( hecho ){

    });*/
  }
  //Se exportan las funciones
  exports.requisicion = requisicion;
  exports.datosRequisicion = datosRequisicion;
  exports.llenado = llenado;
  exports.index = index;
  exports.registro = registro;
  exports.login = login;
  exports.cuenta = cuenta;
