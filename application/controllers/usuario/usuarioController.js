'use strict'
//variables
  const enigma      =     require( 'enigma-code' );
  console.log("Esto es: "+ __dirname);
  const models      =     require( '../../models/index.js' );
  //function index
  function index( req, res ){
    this.puestos().forEach( function( index, element ){
      console.log("INDEX: "+index+" ELEMENT: "+element);
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
  function puestos(){
    let puesto1 = {};
    models.Puesto.findAll({
    }).then( function( puesto ){
      puesto1 = JSON.stringify( puesto );
    });
    return puesto1;
  }
  //Se exportan las funciones
  exports.index = index;
  exports.puestos = puestos;
