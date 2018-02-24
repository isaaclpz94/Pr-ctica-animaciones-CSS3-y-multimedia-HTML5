$(document).ready(function(){

	//AutoScrolll
	setTimeout(function(){
		$("html, body").animate({ scrollTop: $(document).height()-$(window).height() }, 13000);
	}, 2000);


	$(".skip").click(function(){
		$("html, body").stop(false, true);
		$("html, body").scrollTop(3000);
	})

	multiplicarKrills();

	//Cuando el usuario hace scroll y llega hasta la ballena
	var waypoint = new Waypoint({
	  element: $(".ballena"),
	  handler: function() {
	  	//Empezar animacion ballena y krill
	    $(".ballena").removeClass("animacion-off");
	    $(".krill").removeClass("animacion-off");

	    //Ballena comer
	    setTimeout(function(){
			$(".ballena").attr("src", "imgs/ballena-ba.png");
			setTimeout(function(){
				$(".ballena").attr("src", "imgs/ballena.png");
			}, 2000);
		}, 2000);
		setTimeout(function(){
			$(".krill.muere").remove();
		}, 3500);

	  },
	  offset: '100%'
	});

	//Eliminar pinguino cuando salga de la pantalla
	setTimeout(function(){
		$(".pinguino").remove();
	}, 6000);
});

function multiplicarKrills(){
	var krill = $(".krill");

	//Valores minimos y máximos de la posicion a generar
	var minY = 1620;
	var maxY = 1770;
	var minX = -190;
	var maxX = 0;

	//Crear los crills
	for(var i=1; i<=59; i++){
		//Asignamos las posiciones en las que se creará automáticamente
		var posiciones = [Math.floor(Math.random() * (maxX - minX + 1)) + minX, Math.floor(Math.random() * (maxY - minY + 1)) + minY];

		//Lo clonamos y lo metemos en el DOM
		var krillClonado = krill.clone();
		krillClonado.insertAfter(krill);

		//Asignamos las posiciones
		krillClonado.css("right", posiciones[0]+"px");
		krillClonado.css("top", posiciones[1]+"px");
		
		//Según la posición en la que haya "nacido" morirá
		if(posiciones[1] > 1650 && posiciones[1] < 1750){
			krillClonado.addClass("muere");
		}
	}
}