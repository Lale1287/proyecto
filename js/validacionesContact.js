document.addEventListener('DOMContentLoaded', function () {
	const contacto = document.querySelector('#contact-form');
    contacto.addEventListener('submit', function validarForm(evento) {
		evento.preventDefault();
        var name = document.querySelector('#contact-name').value;
		var email = document.querySelector('#contact-mail').value;
		var issue = document.querySelector('#contact-issue').value;
		var message = document.querySelector('#contact-message').value;
		if(validarCampoVac(name)&validarCampoVac(email)&validarCampoVac(issue)&validarCampoVac(message)){
			if (hasNumbers(name)) {
				alert('Solo letras');
				document.querySelector('#contact-name').focus();
				document.querySelector('#contact-name').insertAdjacentHTML('afterend', "<small id='errorA' class='error'>No ingresaste un nombre válido</small>");
				setTimeout(() => { document.querySelector('#errorA').style.display = 'none'; }, 4000);
				return false;
			}
            if (!isEmail(email)) {
				document.querySelector('#contact-mail').focus();
				document.querySelector('#contact-mail').insertAdjacentHTML('afterend', "<small id='errorB' class='error'>No ingresaste un email válido</small>");
				setTimeout(() => { document.querySelector('#errorB').style.display = 'none'; }, 4000);
				return false;
			}
            if(!validarCampoVac(issue)){
				document.querySelector('#contact-issue').focus();
				document.querySelector('#contact-issue').insertAdjacentHTML('afterend', "<small id='errorC' class='error'>Tenés que seleccionar una</small>");
				setTimeout(() => { document.querySelector('#errorC').style.display = 'none'; }, 4000);
				return false;
			}
            if(!validarCampoVac(message)){
				document.querySelector('#contact-message').focus();
				document.querySelector('#contact-message').insertAdjacentHTML('afterend', "<small id='errorD' class='error'>Tenés que seleccionar una</small>");
				setTimeout(() => { document.querySelector('#errorD').style.display = 'none'; }, 4000);
				return false;
			}
		} else{
			alert("Todos los campos deben estar completos");
		}
	});
});
function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function hasNumbers(aString) {
	var regex = /\d+/g;
	return aString.match(regex);
}

function validarN(campo){
	if (validarCampoVac(campo)){
		for (var i = 0, len = campo.length; i < len; i++) { //itero sobre el string del elemento
			var key = campo[i];
			var tecla = key.toLowerCase(); //cada letra presionada, en minuscula	
			var perm="áéíóúabcdefghijklmnñopqrstuvwxyz";
			if(perm.indexOf(tecla)==-1 ){ //evalua si una cadena esta dentro de otra, si esta en los valores permitidos.
        			alert("Solo formato de texto");
           			return false; //si no esta en los caracteres permitidos.
        		} 
		}
		return true;
	}
}

function validarCampoVac(campo){
	if(campo == null || campo == 0 || /^\s+$/.test(campo) ) {
 		return false;
 	} else {
 		return true;
 	}
}

function confirmarAccion () {
	if(confirm("¿Estás Segur@?")){
		return true;
	} else {
		return false;
	}
}