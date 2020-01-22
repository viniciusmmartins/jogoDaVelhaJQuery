var vez = 'o';

function atualizarPlacar(){
	if(vez=='o'){
		$('.placar img').attr('src', 'o.png');
	}else{
		$('.placar img').attr('src', 'x.png');
	}
}

function verificarCampeao(){
	var a1 = (typeof $('.a1').attr('data-marcado')!= 'undefined' ? $('.a1').attr('data-marcado') : '');
	var a2 = (typeof $('.a2').attr('data-marcado')!= 'undefined' ? $('.a2').attr('data-marcado') : '');
	var a3 = (typeof $('.a3').attr('data-marcado')!= 'undefined' ? $('.a3').attr('data-marcado') : '');
	var b1 = (typeof $('.b1').attr('data-marcado')!= 'undefined' ? $('.b1').attr('data-marcado') : '');
	var b2 = (typeof $('.b2').attr('data-marcado')!= 'undefined' ? $('.b2').attr('data-marcado') : '');
	var b3 = (typeof $('.b3').attr('data-marcado')!= 'undefined' ? $('.b3').attr('data-marcado') : '');
	var c1 = (typeof $('.c1').attr('data-marcado')!= 'undefined' ? $('.c1').attr('data-marcado') : '');
	var c2 = (typeof $('.c2').attr('data-marcado')!= 'undefined' ? $('.c2').attr('data-marcado') : '');
	var c3 = (typeof $('.c3').attr('data-marcado')!= 'undefined' ? $('.c3').attr('data-marcado') : '');

	var ganhador = '';

	// verifica horizontal
	if(a2==a1 && a3 == a1 )
		ganhador = a1;
	else if(b2==b1 && b3 == b1 )
			ganhador  = b1;
		else if(c2==c1 && c3 == c1 )
				ganhador = c1;
			//verifica vertical
			else if(b1==a1 && c1 == a1 )
					ganhador = a1;
				else if(b2==a2 && c2 == a2 )
						ganhador = a2;
					else if(b3==a3 && c3 == a3 )
							ganhador = a3;
						// verificar diagonais
						else if(b2==a1 && c3==a1)
								ganhador = a1;
							else if(b2==a3 && c1==a3)
								ganhador = a3;

	var todosMarcados = a1!='' && a2!='' && a3!='' && b1!='' && b2!='' && b3!='' && c1!='' && c2!='' && c3!='';
	var tipo = typeof ganhador;

	if(ganhador != ''){
		alert("O GANHADOR FOI: " + (ganhador == 'o'? "BOLA" : "XIS") );
		reiniciar();
	}else 
		if ( ganhador == '' && todosMarcados == true){
			alert("O JOGO EMPATOU" ); 
			reiniciar();
		}
				
}

function reiniciar(){
	$('.area').html('');
	$('.area').attr('data-marcado','');
}




$(document).ready(function() {
	atualizarPlacar();
	
	$('.area').bind('click', function() {
		if($(this).find('img').length==0){
			if(vez=='o'){
				$(this).html('<img src="o.png" border="0" height="50" />');
				$(this).attr('data-marcado', 'o');
				vez = 'x';
			}else {
				$(this).html('<img src="x.png" border="0" height="50" />');
				$(this).attr('data-marcado', 'x');
				vez = 'o';
			}
		}
		atualizarPlacar();
		verificarCampeao();
	});

});