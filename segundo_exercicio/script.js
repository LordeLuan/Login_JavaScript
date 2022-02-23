var user = {
    login: '',
    senha:  '',
    logado: false
};

$(document).ready(function(){
    console.log('JavaScript funcionando!');

    $('#login-sucesso').hide();

    $('#login-falha').hide();

        verificaLogin();

});

var login = "Luan"
var password = "Devs2Blu"

// Metodo que eu fiz
function realizaLogin(){
    createLoad();
    console.log('Ta funcionando!');
    console.log($('#login').val())
    console.log($('#senha').val())
    if($('#login').val() == login && $('#senha').val() == password){
        $('#login-sucesso').show();
        $('#login-falha').hide();
    } else{
        $('#login-falha').show();
    }
    // pegando valor dos id login e senha passado pelo usuario
    $('#login-informado').val($('#login').val());
    $('#senha-informada').val($('#senha').val());
    console.log($('#login-informado').val())
    console.log($('#senha-informada').val())
    
    createLoad(true);
}

// RealizarLogin que o professor ensinou
function realizarLogin(){
    console.log('Login realizado!');

    var login = $('#login').val();
    var senha = $('#senha').val();

    if(login && senha){
        user = {login: loginSubmit, senha: senhaSubmit, logado: true};
        console.log(user);
        inserir('user', JSON.stringify(user));
    }

}
function createLoad(destroy = false){
    if(!destroy){
        var loadingDiv = document.createElement('div');
        var imgLoading = document.createElement('img');
        
        $(imgLoading).attr('src','_img/loading.gif')
        $(loadingDiv).append(imgLoading);
        $(loadingDiv).attr('class','loading');

        $('body').append(loadingDiv);
        console.log(loadingDiv)
    }else{
        // remove a class loading depois de um tempo passado
        setTimeout(() => $('.loading').remove(),2000);
    }
}

function verificaLogin(){
    if(get('user')){
        $('#formLoginDiv').hide();
    }
}

// Storage Functions

function inserir(key,value){
    if(localStorage.getItem(key)){
        localStorage.removeItem(key);
        localStorage.setItem(key,value);
    } else {
        localStorage.setItem(key,value);
    }
}

function remover(key){
    localStorage.removeItem(key);
}

function get(key){
    localStorage.getItem(key);
}