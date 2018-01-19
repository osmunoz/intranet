/**
  * En este modulo, se va a crear el servidor, es el archivo encargado
  * de arrancar el servidor para toda la aplicacion, solo contendra
  * una funcion en la cual se pondrá a la escucha.
  * @author Oscar Ivan Muñoz Barajas( Slack )
  * @version 0.0.1
*/

  /**
    *  funcion serv, se creara la instancia para arrancar el servidor en el puerto 8081
    * esta funcion se podra exportar, para su uso externo
    * @param app
    * @param port
    * @access public
    * @author Slack
    * @throws crash
  */
    function serv( app, port ){
      app.listen( port, function() {
        console.log( "Servidor; inicio a la perfección en el puerto: "+port);
      });
    }

    exports.serv = serv;
