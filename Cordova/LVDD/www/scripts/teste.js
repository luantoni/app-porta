function ViewModel() {
    var self = this;
    self.usuario = ko.observable('');
    self.password = ko.observable('');

    setTimeout(function () {
        var appp = plugins.appPreferences;
        alert("Iniciado");
        appp.fetch(function (value) {
            self.usuario(value);
        }, function (err) {
            console.log("Erro " + err);
        }, "usuario"
        );
        appp.fetch(function (valueP) {
            self.password(valueP);
        }, function (err) {
            console.log("Erro " + err);
        }, "password"
        );

    }, 1000);

    self.login = function () {
        var appp = plugins.appPreferences;
        appp.store(function (value) {
            console.log("OK  " + value);
        }, function (err) {
            console.log("Erro " + err);
        }, "usuario", self.usuario());

        appp.store(function (value) {
            console.log("OK  " + value);
        }, function (err) {
            console.log("Erro " + err);
        }, "password", self.password());
    }

}