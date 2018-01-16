'use strict'
//variables
  const Sequelize = require( 'sequelize' );
  const sequelize = new Sequelize( 'Intranet','sa','F3rr3t3r14$',{
    dialect:'mssql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: true
  });
