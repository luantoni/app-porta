var OpenWeatherAppKey = "0c2995af981572aae8f711564e88b1db";

function logar() {
    var usuario = $('#usuario').val();
    var senha = $('#senha').val();
    console.log(usuario);
    console.log(senha);

    if (usuario == "" && senha == "") {
        var retornoEmail = testeEmail(usuario);
        console.log("Nao esta vazio");
    }
    else {
        confirm("Preencha todos os campos");
        event.preventDefault();
    }
}

function testeEmail(usuario) {
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
    var queryString = "http://192.168.1.154:3000/unlock";
    console.log("Ola");
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

