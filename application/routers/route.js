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
    const hbs           =       require( 'express-hbs' );
    const controller    =       require( '../controllers/calls.js' );
    const bodyParser    =       require( 'body-parser' );

    //configuracion para cargar la carpeta donde se encontraran los archivos estaticos
      app.use( '/', express.static( path.join( __dirname, '../src/assets' ) ));
      app.use( bodyParser.json() );
      app.use( bodyParser.urlencoded( { extended: true } ) );

    /**
       * Esta funcion, es para decirle que plantilla tomara, y cual vista debe de usar
       * @author Slack
     */
    var routeViews = function( plantilla, carpeta ){
        app.set( 'views', path.join( __dirname + '/../src/view/'+carpeta ) );
        app.set( 'view engine', 'hbs' );
        app.engine( 'hbs', hbs.express4({
          defaultLayout: path.join( __dirname + ' /../src/view/templates/'+plantilla+'.hbs' ),
          extname: '.hbs'
        } ) );
    };
    // cuando entre a localhost:8081/ abrira la siguiente pagina
    app.get( '/', function( req, res ){
      routeViews( 'login', 'login' );
      res.render('login_view');
    });
    //URL para crear una cuenta nueva
    app.get( '/crear-cuenta', function( req, res ){
      controller.llamarA_( 'usuarioController','usuario', 'index', req.body,  req, res );
      routeViews( 'template_base', 'addUser' );
    });
    //URL para agregar a la db el usuario nuevo
    app.post( '/agregar', function( req, res ){
      controller.llamarA_( 'usuarioController','usuario', 'index', req.body,  req, res );
    });
    // cuando se intente entrar a una ruta, que no se este especificando en este modulo, mandara al siguiente error
    app.get( '*', function( req, res ){
      res.status( 404 ).send( "What??? You don´t have power here!!!." );
    });
    // se inicia el servidor especificando el puerto 8081, y pasandole de parametro la variable app
    servidor.serv( app, '8081' );
