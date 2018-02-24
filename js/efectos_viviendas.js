var datos = {
	iglu : {
		nombre : "Iglú",
		descripcion : "Es un refugio construido con bloques de nieve que generalmente posee la forma de cúpula. Los iglúes se asocian comúnmente con los esquimales, que los han usado como refugio temporal para los cazadores durante el invierno."
	},
	tienda:{
		nombre : "Tienda de verano",
		descripcion : "Cuando llega el verano la temperatura se eleva y la nieve se derrite. En esos meses no se necesitan casas tan abrigadosas y viven en tiendas hechas de piel"
	},
	cabaña:{
		nombre : "Cabaña",
		descripcion : "La cabaña es una vivienda mas fija y segura que las demás. Se utiliza sobre todo en invierno."
	}
}

$(document).ready(function(){

	var pinguino = $(".pinguino")

	$("#iglu").click(function(){
		$("#tienda a").fadeOut();
		$("#cabaña a").fadeOut();
		
		moverA(pinguino, $(this))
	});

	$("#tienda").click(function(){
		$("#iglu a").fadeOut();
		$("#cabaña a").fadeOut();

		moverA(pinguino, $(this))
	})

	$("#cabaña").click(function(){
		$("#iglu a").fadeOut();
		$("#tienda a").fadeOut();

		moverA(pinguino, $(this));
	})
})

function moverA(pinguino, objetivo){
	var posicion_objetivo = objetivo.css("left")
	var pixeles_objetivo = parseInt(posicion_objetivo.substring(0, posicion_objetivo.length-2)) + 20
	var pixeles_pinguino = parseInt(pinguino.css("left").substring(0, pinguino.css("left").length-2))

	if(pixeles_pinguino != pixeles_objetivo){
		if(pixeles_pinguino - pixeles_objetivo > 0){
			//Va para la izq
			pinguino.removeClass("pinguino-dcha").addClass("pinguino-izq")
		}else{
			//Dcha
			pinguino.removeClass("pinguino-izq").addClass("pinguino-dcha")
		}

		pinguino.addClass("pinguino-andar")

		pinguino.animate({
			left : pixeles_objetivo+"px"
		}, 2000, 'swing', function() {
			pinguino.removeClass("pinguino-andar")
			objetivo.children("a").fadeIn();

			$(".vivienda-contenido h1").html(datos[objetivo.attr("id")]["nombre"])
			$(".vivienda-contenido p").html(datos[objetivo.attr("id")]["descripcion"])
		})
	}
}