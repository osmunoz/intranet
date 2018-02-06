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
    const fs            =       require( 'fs' );
    const fileup        =       require( 'express-fileupload' );
    const thumb         =       require( 'node-thumbnail' ).thumb;
    const cookie        =       require( 'cookie-parser' );
    const sessions      =       require( 'express-session' );

    //configuracion para cargar la carpeta donde se encontraran los archivos estaticos
      app.use( '/', express.static( path.join( __dirname, '../src/assets' ) ));
      app.use( bodyParser.json() );
      app.use( bodyParser.urlencoded( { extended: true } ) );
      app.use( fileup() );
      app.use( cookie() );
      app.use( sessions({
        secret:'911 F3rr3t3r14@ para todos',
        resave: false,
        saveUninitialized: true,
        cookie:{ secure:false,expires:8000 },
        maxAge: 8000
      }));

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
      if( JSON.stringify( req.params ) === '{}' )
        res.render('login_view');
    });
    //URL para crear una cuenta nueva
    app.get( '/crear-cuenta', function( req, res ){
      controller.llamarA_( 'usuarioController','usuario', 'index', req.body,  req, res );
      routeViews( 'template_base', 'addUser' );
    });
    //login
    app.post( '/login',function( req, res ){
      controller.llamarA_( 'usuarioController', 'usuario', 'login', req.body, req, res );
      routeViews( 'panel','usuario' );
    });
    //URL para agregar a la db el usuario nuevo
    app.post( '/agregar', function( req, res ){
      console.log( req.files );
      if( !req.files )
        return res.status( 400 ).send( 'No files were uploaded.' );
      let file = req.files.fotoUp;
      file.mv( __dirname + '/../src/assets/fotos/'+req.body.nombreUsuario.trim()+'.jpg', function( err ){
        thumb({
          source: __dirname + '/../src/assets/fotos/'+req.body.nombreUsuario.trim()+'.jpg',
          destination: __dirname + '/../src/assets/preview',
          suffix: 'thumb',
          digest: false,
          width: 50,
          overwrite: true
        },function( files, err, stdout, stderr ){
          controller.llamarA_( 'usuarioController','usuario', 'registro', req.body,  req, res );
          routeViews( 'template_base', 'addUser' );
        });
      });
    });
    //Destruye session y la cookie
    app.get( '/adiosVaquero', function( req, res ){
      res.clearCookie('logueado');
      req.session.destroy;
      res.redirect( '/' );
    });

    // cuando se intente entrar a una ruta, que no se este especificando en este modulo, mandara al siguiente error
    app.get( '*', function( req, res ){
      res.status( 404 ).send( "What??? You don´t have power here!!!." );
    });
    // se inicia el servidor especificando el puerto 8081, y pasandole de parametro la variable app
    servidor.serv( app, '8081' );
