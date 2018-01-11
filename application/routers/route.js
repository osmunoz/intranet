/**
  * Modulo para el desarrollo del router, en este modulo, se van a atrapar
  * todas las url's que se usen en la aplicación, en caso de que no se encuentre
  * ninguna url's se mandara el error 404
  *
  * @author Oscar Ivan Muñoz Barajas( Slack )
  * @version 0.0.2
*/
    const express       =       require( 'express' );// Se carga el modulo de express
    const app           =       express();// se asigna express para su uso posteriormente
    const servidor      =       require( '../servs/serv.js' );
    const path          =       require( 'path' );

    // view engine setup
    // se hace el acomodo de los ficheros estaticos, asi como de donde abrira(carpeta) las vistas
    //views
    app.use( express.static( path.join( __dirname, '../src' ) ) );
    //configuracion para cargar la carpeta donde se encontraran los archivos estaticos
    app.use( '/', express.static( path.join( __dirname, '../src/assets' ) ), function(){
      console.log("Here again!!!");
    });
    // se le dice el tipo de extension que debe de leer
    app.set( 'views', __dirname + '/../src' );
    app.set( 'view engine', 'html' );

    // cuando entre a localhost:8081/ abrira la siguiente pagina
    app.get( '/', function( req, res ){
      res.render( '/src/index.html' );
    });

    // cuando se intente entrar a una ruta, que no se este especificando en este modulo, mandara al siguiente error
    app.get( '*', function( req, res ){
      res.status( 404 ).send( "What??? You don´t have power here!!!." );
    });
    // se inicia el servidor especificando el puerto 8081, y pasandole de parametro la variable app
    servidor.serv( app, '911' );
