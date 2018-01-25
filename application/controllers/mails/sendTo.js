  'use strict';
/**
  * En esta clase, lo que se va a hacer es que cuando se mande a llamar
  * se elegira el tipo de plantilla que se va a enviar por correo, en
  * este caso, creara la parte donde se tiene la cuenta configurada
  * para el envio del correo, se hara la manera para llamar la plantilla
  * que se quiera enviar, dependiendo del caso.
  *
  * @author Oscar Ivan Muñoz Barajas(Slack)
  * @version 0.0.1
*/
    // se importan los modulos requeridos
    const nodemailer  =     require( 'nodemailer' );
    const hbs         =     require( 'nodemailer-express-handlebars' );
    const smtp        =     require( 'nodemailer-smtp-transport' );

  /*----------------------------------------------------------------------*/
  /**
    * Función que inicializa el envió de correos, ademas de que aqui se tomara la decisión de cual plantilla
    * se debera de enviar, por medio de un parametro que va a recibir la funcion, este parametro
    * hara que la funcion decida que plantilla debe de enviar.
    * @param addres
    * @param plantilla
  */
    function send( address, plantilla, res ){
      // se configura la plantilla que se va a querer usar
      let hbsOptions = {
          viewEngine: {
            extname: 'hbs',
            layoutsDir: __dirname + '/../../src/view/templates/',
            defaultLayout:'email.hbs'
          },
          viewPath: __dirname + '/../../src/view/template_mails/',
          extName: '.hbs'
      };
      //Create reusable transporter object using the default SMTP transport
      let transporter = {
        pool: true,
        host:'mail.indar.com.mx',
        port: 587,
        secure:false, //true for 465, false for other ports
        auth:{
          user:'intranet@indar.com.mx',
          pass:'Intr$2017'
        },
        tls:{ rejectUnauthorized: false }
      }
      // setup email data with unicode symbols
      let mailOptions = {};
      switch( plantilla ){
        case 'Bienvenida':
          mailOptions = {
            from: '"Intranet INDAR " <no-reply@indar.com.mx>',//Sender address
            to: address,
            subject: 'Bienvenido',
            template: plantilla,
            attachments:[
              {
                filename: 'bigImg.png',
                path: __dirname + '/images/bigImg.png'
              },
              {
                filename: 'featured1.png',
                path: __dirname + '/images/featured1.png'
              },
              {
                filename: 'featured2.png',
                path: __dirname + '/images/featured2.png'
              },
              {
                filename: 'featured3.png',
                path: __dirname + '/images/featured3.png'
              }
           ]
          };
        break;
        case 'Rechazo':
          mailOptions = {
            from: '"Intranet INDAR " <no-reply@indar.com.mx>',//Sender address
            to: address,
            subject: 'Solicitud rechazada',
            template: plantilla
          };
        break;
      }
      // send mail with defined transport object
      let sending = nodemailer.createTransport( smtp( transporter ) );
      sending.use( 'compile', hbs( hbsOptions ) );
      sending.sendMail( mailOptions,( error, info ) =>{
        if( error )
          return console.log( error );
        if( res ){
          console.log( 'Message sent: %s',info.messageId );
          res.render( 'userNotif' );
        }
      });
    }
    exports.send = send;
