//Validaciones en cliente
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('#reg-form');
    formulario.addEventListener('submit', function validar(evento) {
        evento.preventDefault();
        var nom = document.querySelector('#name').value;
        if (hasNumbers(nom)) {
            document.querySelector('#name').insertAdjacentHTML('afterend', "<p>No ingresaste un nombre válido</p>");
            document.querySelector('#name').focus();
            return false;
        }
        var ape = document.querySelector('#lastname').value;
        if (hasNumbers(ape)) {
            document.querySelector('#lastname').insertAdjacentHTML('afterend', "<p>No ingresaste un apellido válido</p>");
            document.querySelector('#lastname').focus();
            return false;
        }
        var mail = document.querySelector('#mail').value;
        if (!isEmail(mail)) {
            document.querySelector('#mail').insertAdjacentHTML('afterend', "<p>No ingresaste un email válido</p>");
            document.querySelector('#mail').focus();
            return false;
        }
        var tel = document.querySelector('#phone').value;
        if (isNaN(tel)) {
            document.querySelector('#phone').insertAdjacentHTML('afterend', "<p>No ingresaste un número válido</p>");
            document.querySelector('#phone').focus();
            //    $("<div class='alert alert-danger'></div>").html("Debes ingresar s&oacute;lo n&oacute;meros").appendTo(".phone");
        //   $(".alert").delay(3000).fadeOut('slow');
            return false;
        }
        this.submit();
    });
});
//function goBack() {
//	// history.go(-1);
//	var dest = path+"/src/common/redirector.php";
//	window.location.href = dest;
//}

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
		elemento = document.getElementById(campo).value; //Busca el valor que contiene el campo con el id recibido por parametro
		for (var i = 0, len = elemento.length; i < len; i++) { //itero sobre el string del elemento
			var key = elemento[i];
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

function validarNum(campo) {
	if(validarCampoVac(campo)){
		var num = document.getElementById(campo).value;
		if (isNaN(num) || num <= 0 ) {
			alert ("Solo formato num&eacute;rico"); 
			return false;
		}
		return true;
	}
}

function validarCampoVac(campo){
	var valor = document.getElementById(campo).value;
	if(valor == null || valor == 0 || /^\s+$/.test(valor) ) {
		alert("Todos los campos deben estar completos");
 		return false;
 	} else {
 		return true;
 	}
}

function confirmarAccion () {
	if(confirm("¿Segur@?")){
		return true;
	} else {
		return false;
	}
}