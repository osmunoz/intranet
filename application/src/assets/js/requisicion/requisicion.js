$(document).ready( function(){
  $("#soliReq").click( function(){
    $.ajax({
      method: 'POST',
      async: true,
      cache: false,
      url: '/datos',
      success: function ( data ){console.log("JSON: "+JSON.stringify( data ));
        let html = "";
        $("#requisiciones").html('');
        console.log("Desde aqui");
        $.each( JSON.parse( data ), function( i, item ){console.log("I: "+i+" ITEM: "+item);
          if( item.estatus === 0 ){
            html += '<tr>';
              html += '<td><center><img class="img-fluid img-thumbnail" src="'+item.urlFoto.trim()+'"</center></td>';
              html += '<td><center>'+iem.noEmpleado+'</center></td>';
              html += '<td><center>'+item.nombreCompleto.trim()+'</center></td>';
              html += '<td><center>'+item.puesto.trim()+'</center></td>';
              html += '<td><center>'+item.area.trim()+'</center></td>';
              html += '<td><center>Procesando</center></td>';
            html += '</tr>';
          }
        });
        $("#requisiciones").html( html );
      },
      error: function( err ){
        console.log("ERROR: "+JSON.stringify( err ));
      }
    });
  });
});
