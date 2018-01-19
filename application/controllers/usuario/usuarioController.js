'use strict'
//variables
  const enigma      =     require( 'enigma-code' );
  const models      =     require( '../../models/index.js' );
  //function index
  function index( req, res ){
    models.Puesto.findAll({
    }).then( function( puesto ){
      console.log( puesto.tipoPuesto);
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
