$('#boton').click(function(){
	$.get("https://my-json-server.typicode.com/YueStark/ajax/Datos", function(datos,status){
		$.each(datos ,function(ind,elem){
			$('.datos').append("<tr><td>" + elem.Nombre + "</td><td>" + elem.Apellido + "</td><td>" + elem.Cedula + "</td></tr>");
		});
	});
});

