/**
  * En este archivo, se encontrara la configuración inicial, para arrancar
  * en si todo el sistema. Mandara llamar al router, que sera el archivo
  * encargado de routear, todas las peticiones que se hagan en el navegador
  * y arrancar el servidor
  * @author Oscar Ivan Muñoz Barajas( Slack )
  * @version 0.0.1
*/
  // se exporta el modulo donde se encuentra el router
  console.log( __dirname );
  var router        =         require( './application/routers/route' );
