$( document ).ready( function(){
  $("#nombreUsuario").change(function(){
    if( $( this ).val() === "" || $( this ).val().length < 2 ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"top",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de contener información valida este campo"
      }).css({
        "border-color":"red"
      }).popover('show').focus();
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#nEmpleado" ).change( function(){
    if( $( this ).val() === "" || $( this ).val().length < 2 ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"top",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de contener información valida este campo"
      }).css({
        "border-color":"red"
      }).popover('show').focus();
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#nacimiento" ).change(function(){
    console.log("Fecha: "+$(this).val());
    var ahora = $( this ).val();
    if( ahora === ""  ){
        $( this ).attr({
          "data-toggle":"popover",
          "data-placement":"top",
          "title":"Campo "+$(this).prev().text(),
          "data-content":"Debe de contener información valida este campo"
        }).css({
          "border-color":"red"
        }).popover('show').focus();
      }else{
        $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
      }
  });
  $( "#direccion" ).change( function(){
    if( $( this ).val() === "" || $( this ).val().length < 2 ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"top",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de contener información valida este campo"
      }).css({
        "border-color":"red"
      }).popover('show').focus();
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#tel" ).change( function(){
    if(  $( this ).val() === "" || $( this ).val().length < 2  ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"top",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de contener información valida este campo"
      }).css({
        "border-color":"red"
      }).popover('show').focus();
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#mail" ).change( function(){
    if( $( this ).val() === "" || $( this ).val().length < 2 ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"top",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de contener información valida este campo"
      }).css({
        "border-color":"red"
      }).popover('show').focus();
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#ext" ).change( function(){
    if( $( this ).val() === "" || $( this ).val().length < 2 ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"top",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de contener información valida este campo"
      }).css({
        "border-color":"red"
      }).popover('show').focus();
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $("#pass").change( function(){
    if( $( this ).val() === "" || $( this ).val().length < 2 ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"top",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de contener información valida este campo"
      }).css({
        "border-color":"red"
      }).popover('show').focus();
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $("#passw").change( function(){
    if( $( '#pass' ).val() === $( this ).val() ){
      if( $( this ).val() === "" || $( this ).val().length < 2 ){
        $( this ).attr({
          "data-toggle":"popover",
          "data-placement":"top",
          "title":"Campo "+$(this).prev().text(),
          "data-content":"Debe de contener información valida este campo"
        }).css({
          "border-color":"red"
        }).popover('show').focus();
      }else{
        $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
      }
    }else{
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"top",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de coincidir este campo, con el de Password, favor de revisarlo"
      }).css({
        "border-color":"red"
      }).popover('show').focus();
    }
  });
  $( "#rfc" ).change( function(){
    if( $( this ).val() === "" || $( this ).val().length < 2 ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"top",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de contener información valida este campo"
      }).css({
        "border-color":"red"
      }).popover('show').focus();
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#curp" ).change( function(){
    if( $( this ).val() === "" || $( this ).val().length < 2 ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"top",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de contener información valida este campo"
      }).css({
        "border-color":"red"
      }).popover('show').focus();
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#numeroIMSS" ).change( function(){
    if( $( this ).val() === "" || $( this ).val().length < 2 ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"top",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de contener información valida este campo"
      }).css({
        "border-color":"red"
      }).popover('show').focus();
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#puesto" ).blur( function(){
    if( $( this ).val() === "0" ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"left",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de seleccionar una opción"
      }).css({
        "border-color":"red"
      }).popover('show');
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#escuela" ).blur( function(){
    if( $( this ).val() === "0" ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"left",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de seleccionar una opción"
      }).css({
        "border-color":"red"
      }).popover('show');
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#typeBlood" ).blur( function(){
    if( $( this ).val() === "0" ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"left",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de seleccionar una opción"
      }).css({
        "border-color":"red"
      }).popover('show');
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#dep" ).blur(function(){
    if( $( this ).val() === "0" ){
      $( this ).attr({
        "data-toggle":"popover",
        "data-placement":"left",
        "title":"Campo "+$(this).prev().text(),
        "data-content":"Debe de seleccionar una opción"
      }).css({
        "border-color":"red"
      }).popover('show');
    }else{
      $( this ).removeAttr( "data-toggle data-trigger title data-content" ).css( {"border-color":"green"} ).popover('hide');
    }
  });
  $( "#hombre" ).change(function(){console.log("Hombre");
    $( this ).attr({ 'value':'H' });
    $( this ).prev('label').addClass( 'active' );
    $( "#mujer" ).prev('label').removeClass( 'active' );
    $( "#mujer" ).removeAttr(  'value' );
  });
  $( "#mujer" ).change( function(){console.log("Mujer");
    $( this ).attr({ 'value':'M' });
    $( this ).prev('label').addClass( 'active' );
    $( "#hombre" ).prev('label').removeClass( 'active' );
    $( "#hombre" ).removeAttr( 'value' );
  });
});
