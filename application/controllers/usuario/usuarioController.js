'use strict'
//variables
  const enigma      =     require( 'enigma-code' );
  const models      =     require( '../../models/' );
  //function index
  function index( object, req, res ){
    var data ={
      puesto: puestos(),
      escuela : escolaridades()
    }
    res.render( 'addingUser',{ data:data  } );

  }
  function puestos(){
    models.Puesto.findAll({}).then( function( getPuesto ){
      return JSON.parse( JSON.stringify( getPuesto ) );
    });
  }
  function escolaridades(){
    models.Escolaridad({}).then( function( escuela ){
      return JSON.parse( JSON.stringify( escuela ) );
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
    let seed = "IndArF3rr3T3r14$";
    let valor = 911;
    enigma.genHash( valor,contrasena, seed, function( err, hash ){
      if( err ) return console.log( err );
      return hash;
    });
  }
  //Se exportan las funciones
  exports.index = index;
