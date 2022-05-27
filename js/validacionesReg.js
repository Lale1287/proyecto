//Validaciones en cliente
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('#reg-form');
	const direccion = window.location.pathname;
	console.log(direccion);
    formulario.addEventListener('submit', function validar(evento) {
        evento.preventDefault();
        var nom = document.querySelector('#name').value;
		var ape = document.querySelector('#lastname').value;
		var mail = document.querySelector('#mail').value;
		var tel = document.querySelector('#phone').value;
		var cat = document.querySelector('#category').value;
		var pass = document.querySelector('#password').value;
		var repass = document.querySelector('#repassword').value;
		if(validarCampoVac(nom)&validarCampoVac(ape)&validarCampoVac(mail)){
			if (hasNumbers(nom)) {
				document.querySelector('#name').focus();
				document.querySelector('#name').insertAdjacentHTML('afterend', "<small id='error1' class='error'>No ingresaste un nombre válido</small>");
				setTimeout(() => { document.querySelector('#error1').style.display = 'none'; }, 4000);
				return false;
			}
			if (hasNumbers(ape)) {
				document.querySelector('#lastname').focus();
				document.querySelector('#lastname').insertAdjacentHTML('afterend', "<small id='error2' class='error'>No ingresaste un apellido válido</small>");
				setTimeout(() => { document.querySelector('#error2').style.display = 'none'; }, 4000);
				return false;
			}
			if (!isEmail(mail)) {
				document.querySelector('#mail').focus();
				document.querySelector('#mail').insertAdjacentHTML('afterend', "<small id='error3' class='error'>No ingresaste un email válido</small>");
				setTimeout(() => { document.querySelector('#error3').style.display = 'none'; }, 4000);
				return false;
			}
			if (isNaN(tel)) {
				document.querySelector('#phone').focus();
				document.querySelector('#phone').insertAdjacentHTML('afterend', "<small id='error4' class='error'>No ingresaste un número válido</small>");
				setTimeout(() => { document.querySelector('#error4').style.display = 'none'; }, 4000);
				return false;
			}
			if(!validarCampoVac(cat)){
				document.querySelector('#category').focus();
				document.querySelector('#category').insertAdjacentHTML('afterend', "<small id='error5' class='error'>Tenés que seleccionar una</small>");
				setTimeout(() => { document.querySelector('#error5').style.display = 'none'; }, 4000);
				return false;
			}
			if(!validarCampoVac(pass)){
				document.querySelector('#password').focus();
				document.querySelector('#password').insertAdjacentHTML('afterend', "<small id='error6' class='error'>Tenés que completar el campo</small>");
				setTimeout(() => { document.querySelector('#error6').style.display = 'none'; }, 4000);
				return false;
			}
			if(!validarCampoVac(repass)){
				document.querySelector('#repassword').focus();
				document.querySelector('#repassword').insertAdjacentHTML('afterend', "<small id='error7' class='error'>Tenés que completar el campo</small>");
				setTimeout(() => { document.querySelector('#error7').style.display = 'none'; }, 4000);
				return false;
			}
			if(!(pass===repass)){
				document.querySelector('#repassword').focus();
				document.querySelector('#repassword').insertAdjacentHTML('afterend', "<small id='error8' class='error'>Las contraseñas deben coincidir</small>");
				setTimeout(() => { document.querySelector('#error8').style.display = 'none'; }, 4000);
				return false;
			}
			if(confirmarAccion()){
				this.submit();
				alert('Info Enviada!');
				window.location = direccion;
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