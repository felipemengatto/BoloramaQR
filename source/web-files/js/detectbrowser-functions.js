//
//
//  Detectando Browser
//
$( document ).ready(function() {

	//verifica navegadores
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
	var isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
	var isiPod = /ipod/i.test(navigator.userAgent.toLowerCase());

	if (isAndroid){

	  redirect( urlParam('android') );

	} else if (isiPad || isiPhone || isiPod){

	  redirect( urlParam('apple') );

	}

	//Lê URL parameters
	function urlParam(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		return results[1] || 0;
	}

	//função para redirecionar
	function redirect(url) {
	   window.location = url;
	}

});