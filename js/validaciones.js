//Validaciones en cliente
$(document).ready(function() {
    $('#reg-form').on('submit', function() {
        var nom = $('#name').val();
        if (hasNumbers(nom)) {
            $("<div class='alert alert-danger'></div>").html("Debes ingresar un nombre v&aacute;lido").appendTo(".name");
            $(".alert").delay(3000).fadeOut('slow');
            return false;
        }
        var ape = $('#lastname').val();
        if (hasNumbers(ape)) {
            $("<div class='alert alert-danger'></div>").html("Debes ingresar un apellido v&aacute;lido").appendTo(".lastname");
            $(".alert").delay(3000).fadeOut('slow');
            return false;
        }
        var mail = $('#mail').val();
        if (!isEmail(mail)) {
            $("<div class='alert alert-danger'></div>").html("Debes ingresar un email v&aacute;lido").appendTo(".mail");
            $(".alert").delay(3000).fadeOut('slow');
            return false;
        }
        var tel = $('#phone').val();
        if (isNaN(tel)) {
            $("<div class='alert alert-danger'></div>").html("Debes ingresar s&oacute;lo n&oacute;meros").appendTo(".phone");
            $(".alert").delay(3000).fadeOut('slow');
            return false;
        }
    });
});