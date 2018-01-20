
    const fs          =         require( 'fs' );
    const path        =         require( 'path' );
    const Sequelize   =         require( 'sequelize' );
    //const basename    =         path.basename( module.filename );
    const env         =         process.env.NODE_ENV || 'development';
    const db          =         {};

    const sequelizePuesto = new Sequelize( 'Intranet', 'sa', 'HJSPASS#1',{
      host: '192.168.87.10',
      dialect: 'mssql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define: {
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        tableName: 'Puesto'
      },
      operatorsAliases: true
    });
    const sequelizeUsuario = new Sequelize( 'Intranet', 'sa', 'HJSPASS#1',{
      host: '192.168.87.10',
      dialect: 'mssql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define:{
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        tableName: 'Usuario'
      },
      operatorsAliases: true
    });
    const sequelizeProspecto = new Sequelize( 'Intranet', 'sa', 'HJSPASS#1',{
      host: '192.168.87.10',
      dialect: 'mssql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define:{
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        tableName: 'Prospecto'
      },
      operatorsAliases: true
    });
    const sequelizeExamen = new Sequelize( 'Intranet', 'sa', 'HJSPASS#1',{
      host: '192.168.87.10',
      dialect: 'mssql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define:{
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        tableName: 'Examen'
      },
      operatorsAliases: true
    });
    const sequelizeEstatus = new Sequelize( 'Intranet', 'sa', 'HJSPASS#1',{
      host: '192.168.87.10',
      dialect: 'mssql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define:{
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        tableName: 'Estatus'
      },
      operatorsAliases: true
    });
    const sequelizeEscolaridad = new Sequelize( 'Intranet', 'sa', 'HJSPASS#1',{
      host: '192.168.87.10',
      dialect: 'mssql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define:{
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        tableName: 'Escolaridad'
      },
      operatorsAliases: true
    });
    const sequelizeDepartamento = new Sequelize( 'Intranet', 'sa', 'HJSPASS#1',{
      host: '192.168.87.10',
      dialect: 'mssql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define:{
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        tableName: 'Departamento'
      },
      operatorsAliases: true
    });
    const sequelizeAcceso = new Sequelize( 'Intranet', 'sa', 'HJSPASS#1',{
      host: '192.168.87.10',
      dialect: 'mssql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      define:{
        timestamps: false,
        paranoid: true,
        freezeTableName: true,
        tableName: 'Acceso'
      },
      operatorsAliases: true
    });

    fs.readdirSync( __dirname + '/puesto' ).filter( function( file ){
      return ( file.indexOf( '.' ) !== 0 );
    }).forEach( function( files ) {
      var model = sequelizePuesto['import']( path.join( __dirname+ '/puesto', files ) );
      db[ model.name ] = model;
    });
    fs.readdirSync( __dirname + '/usuario' ).filter( function( file ){
        return ( file.indexOf( '.' ) !== 0 );
    }).forEach( function( file ){
      var model = sequelizeUsuario['import']( path.join( __dirname +'/usuario', file ) );
      db[ model.name ] = model;
    });
    fs.readdirSync( __dirname + '/prospecto' ).filter( function( file ){
      return ( file.indexOf( '.' ) !== 0 );
    }).forEach( function( file ) {
      var model = sequelizeProspecto[ 'import' ]( path.join( __dirname +'/prospecto', file ) );
      db[ model.name ] = model;
    });
    fs.readdirSync( __dirname + '/examen').filter( function( file ){
      return ( file.indexOf( '.' ) !== 0 );
    }).forEach( function( file ){
      var model = sequelizeExamen[ 'import' ]( path.join( __dirname +'/examen', file ) );
      db[ model.name ] = model;
    });
    fs.readdirSync( __dirname + '/estatus' ).filter( function( file ){
      return ( file.indexOf( '.' ) !== 0 );
    }).forEach( function( file ){
      var model = sequelizeEstatus[ 'import' ]( path.join( __dirname + '/estatus', file  ) );
      db[ model.name ] = model;
    });
    fs.readdirSync( __dirname + '/escolaridad' ).filter( function( file ){
      return ( file.indexOf( '.' ) !== 0 );
    }).forEach( function( file ){
      var model = sequelizeEscolaridad[ 'import' ]( path.join( __dirname + '/escolaridad', file ) );
      db[ model.name ] = model;
    });
    fs.readdirSync( __dirname + '/departamento' ).filter( function( file ){
      return ( file.indexOf( '.' ) !== 0 );
    }).forEach( function( file ){
      var model = sequelizeDepartamento[ 'import' ]( path.join( __dirname + '/departamento', file ) );
      db[ model.name ] = model;
    });
    fs.readdirSync( __dirname + '/acceso' ).filter( function( file ){
      return ( file.indexOf( '.' ) !== 0 );
    }).forEach( function( file ){
      var model = sequelizeAcceso[ 'import' ]( path.join( __dirname +'/acceso', file ) );
      db[ model.name ] = model;
    });
    Object.keys( db ).forEach( function( modelName ){
      if( "associate" in db[ modelName ] )
        db[ modelName ].associate( db );
    });
    db.sequelize = sequelizeUsuario;
    db.Sequelize = Sequelize;
    module.exports = db;
