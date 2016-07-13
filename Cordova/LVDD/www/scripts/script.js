var OpenWeatherAppKey = "0c2995af981572aae8f711564e88b1db";
var dados = [];
function logar() {
    var usuario = $('#usuario').val();
    var senha = $('#senha').val();
    
    if (usuario == "" || senha == "") {
        confirm("Preencha todos os campos");
        event.preventDefault();
    }
    else {
        var retornoEmail = testeEmail(usuario, senha);
        if (retornoEmail == 1) {
            dados = [usuario, senha];
        }
    }
}

function testeEmail(usuario, senha) {
    var tamanhoTotal = usuario.length;
    var dominio = usuario.indexOf("@");
    var email = usuario.substring(0, dominio);
    var posicao = usuario.substring(dominio + 1, tamanhoTotal);

    if (posicao == "digitaldesk.com.br") {
        var retornoEmail = 1;
        return retornoEmail;
    }
    else {
        confirm("Este e-mail não tem acesso ao site!");
        event.preventDefault();
    }
}

function entrar() {
    console.log(dados);
    var queryString = "http://192.168.1.154:3000/unlock";
    $.getJSON(queryString, function (results) {
        mostra(results);

    }).fail(function (jqXHR) {
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. ");
    });

    return false;
}

function mostra(results) {
    console.log(result);
}

