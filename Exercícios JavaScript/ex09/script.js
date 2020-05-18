function identific_nav(){
    var nav = navigator.userAgent.toLowerCase();
    if(nav.indexOf("msie") != -1){
        browser = "msie";
    }else if(nav.indexOf("opera") != -1){
        browser = "opera";
    }else if(nav.indexOf("mozilla") != -1){
        if(nav.indexOf("firefox") != -1){
            browser = "firefox";
        }else if(nav.indexOf("firefox") != -1){
            browser = "mozilla";
        }else if(nav.indexOf("chrome") != -1){
            browser = "chrome";
        }
    }else{
	alert("Navegador desconhecido!");
    }

    document.body.innerHTML += browser+'<br>';
    informacaoNavegador();
}

function informacaoNavegador() {

    document.body.innerHTML += navigator.appVersion+'<br>';
    document.body.innerHTML += navigator.language+'<br>';

}