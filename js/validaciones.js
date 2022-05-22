//Validaciones en cliente
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('#reg-form');
    formulario.addEventListener('submit', function validar(evento) {
        evento.preventDefault();
        var nom = document.querySelector('#name').value;
		var ape = document.querySelector('#lastname').value;
		var mail = document.querySelector('#mail').value;
		var tel = document.querySelector('#phone').value;
		if(validarCampoVac(nom)&validarCampoVac(ape)&validarCampoVac(mail)&validarCampoVac(tel)){
			if (hasNumbers(nom)) {
				document.querySelector('#name').focus();
				document.querySelector('#name').insertAdjacentHTML('afterend', "<p id='error1'>No ingresaste un nombre válido</p>");
				setTimeout(() => { document.querySelector('#error1').style.display = 'none'; }, 4000);
				return false;
			}
			if (hasNumbers(ape)) {
				document.querySelector('#lastname').focus();
				document.querySelector('#lastname').insertAdjacentHTML('afterend', "<p id='error2'>No ingresaste un apellido válido</p>");
				setTimeout(() => { document.querySelector('#error2').style.display = 'none'; }, 4000);
				return false;
			}
			if (!isEmail(mail)) {
				document.querySelector('#mail').focus();
				document.querySelector('#mail').insertAdjacentHTML('afterend', "<p id='error3'>No ingresaste un email válido</p>");
				setTimeout(() => { document.querySelector('#error3').style.display = 'none'; }, 4000);
				return false;
			}
			if (isNaN(tel)) {
				document.querySelector('#phone').focus();
				document.querySelector('#phone').insertAdjacentHTML('afterend', "<p id='error4'>No ingresaste un número válido</p>");
				setTimeout(() => { document.querySelector('#error4').style.display = 'none'; }, 4000);
				return false;
			}
			if(confirmarAccion()){
				this.submit();
				alert('Info Enviada!')
			}
		} else{
			alert("Todos los campos deben estar completos");
		}
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