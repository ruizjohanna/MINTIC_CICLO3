function consultarAdministradorTodo() {
    $.ajax({
        url: 'http://129.151.121.210:8080/api/Admin/all',
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta)
            $("#TablaResultadoAdministradores").empty();
            $("#TablaResultadoAdministradores").append("<tr>");
            $("#TablaResultadoAdministradores").append("<th>NOMBRE</th>");
            $("#TablaResultadoAdministradores").append("<th>EMAIL</th>");
            $("#TablaResultadoAdministradores").append("</tr>");
            for (i = 0; i < respuesta.length; i++) {
                $("#TablaResultadoAdministradores").append("<tr>");
                $("#TablaResultadoAdministradores").append("<td>" + respuesta[i].name + "</td>");
                $("#TablaResultadoAdministradores").append("<td>" + respuesta[i].email+ "</td>"); 
                $("#TablaResultadoAdministradores").append("</tr>");
            }
        }
    });
}


function guardarAdministrador() {
    var datos = {
        name: $('#nombreU').val(),
        email: $("#correoU").val(),
        password: $("#contrasenaU").val()
    }

    var datosaEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'http://129.151.121.210:8080/api/Admin/save',
        data: datosaEnviar,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Usuario Guardado');
            limpiarFormulario();
        }
    });
}

function editarMensaje() {
    var datos = {
        id: $('#ide').val(),
        messagetext: $("#mensaje").val()
    }

    var datosaEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g54ed9b48eae3a2-edinsondb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        data: datosaEnviar,
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        complete: function (xhr, status) {
            alert('Petición realizada ' + xhr.status);
            limpiarFormulario();
        }
    });
}

function eliminarMensaje() {
    var datos = {
        id: $("#ide").val()
    }

    var datosaEnviar = JSON.stringify(datos);

    $.ajax({
        url: 'https://g54ed9b48eae3a2-edinsondb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        data: datosaEnviar,
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Petición realizada ' + xhr.status);
            limpiarFormulario();
        }
    });
}

function buscarMensajeId(id) {
    $.ajax({
        url: 'https://g54ed9b48eae3a2-edinsondb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/' + id.val(),
        dataType: 'json',
        type: 'GET',
        success: function (json) {
            $("#TablaResultadoMensajes").empty();
            $("#TablaResultadoMensajes").append("<tr>");
            $("#TablaResultadoMensajes").append("<th>ID</th>");
            $("#TablaResultadoMensajes").append("<th>MENSAJE</th>");
            $("#TablaResultadoMensajes").append("</tr>");
            for (i = 0; i < json.items.length; i++) {
                $("#TablaResultadoMensajes").append("<tr>");
                $("#TablaResultadoMensajes").append("<td>" + json.items[i].id + "</td>");
                $("#TablaResultadoMensajes").append("<td>" + json.items[i].messagetext + "</td>");
                $("#TablaResultadoMensajes").append("</tr>");
            }
            console.log(json)
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema' + xhr.status);
        },
        complete: function (xhr, status) {
            alert('Petición realizada ' + xhr.status);
        }
    });
}

function limpiarFormulario() {
    $("#nombreU").val("");
    $("#correoU").val("");
    $("#contrasenaU").val("");
}



