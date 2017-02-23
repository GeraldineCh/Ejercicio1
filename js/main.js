function mostrar() {
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('ap').value;
	var documento = document.getElementById('dni').value;
	var direccion = document.getElementById('adress').value;
	document.getElementById('name').value = "";
	document.getElementById('ap').value = "";
	document.getElementById('dni').value = "";
	document.getElementById('adress').value = "";
	event.preventDefault();
	if (nombre !="" && apellido != "" && documento !="" && direccion != "" )
	{document.getElementById('salida').innerHTML = "<ul>"+ 
			"<li>Nombre: " +nombre+"</li>"+
			"<li>Apellido: " +apellido+"</li>"+
			"<li>DNI: " +documento+"</li>"+
			"<li>Dirección: " +direccion+"</li>"+
		"</ul>";
		}

	};
