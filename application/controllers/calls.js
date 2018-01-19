/**
  * Con este archivo, se trata de hacer que cuando se mande a llamar
  * la funcion: se pueda llamar a cualquier archivo que se encuentre en esta
  * ruta, unica y exclusiva rutas que vengan en la carpeta controllers
  * asi como la funcion que necesite de dicho archivo.
  * se enviara los parametros en la llamada a este archivo. Como debe de funcionar
  * es de la siguiente manera, se manda a llamar la funcion de este archivo
  * lo que significa que mandara a llamar al controlador que se le pidio, así
  * mismo se llama a la funcion y se le pasa los parametros necesarios
  *
  *
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @Date Wendnesday 17, January 2018
  * @version 0.0.1
*/

    // se manda a llamar los modulos que se van a requerir
    const fs = require( 'fs' );

    /**
      * function llamarA_
      * con esta funcion se podra llamar a cualquier controlador y cualquiera
      * de sus metodos y enviarle los parametros que requiera para su funcionamiento
      *
      * @param controller
      * @param funcion
      * @param objecto
      * @param rs
      * @param rq
    */
    function llamarA_( controller, carpeta, funcion, objeto,  rq, rs ){
      // se checa si existe el archivo que se mando a llamar
      if( fs.existsSync( __dirname+'/'+carpeta+'/'+controller+'.js' ) ){
        if( funcion === '' ){
          console.log('Hace falta llamar una funcion');
          return false;
        }else{
          let llamando = require( './'+carpeta+'/'+controller+'.js' );
          llamando[ funcion ]( objeto, rq, rs );
        }
      }else{
        console.log("No existe el archivo que esta tratando de llamar");
      }
    }
    //Se exporta la funcion para que se pueda utilizar en otros archivos
    exports.llamarA_ = llamarA_;
