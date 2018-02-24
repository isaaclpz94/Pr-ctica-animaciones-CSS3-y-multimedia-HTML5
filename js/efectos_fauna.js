$(document).ready(function(){
	$("#reproducir_oso").click(function(){
		//Si se están reproduciendo los otros que se paren
		if($("#foca_audio").data("play") == "true"){
			//Parar audio foca
			$("#foca_audio")[0].pause();
			$("#foca_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#foca_audio").data("play", "false");
			$("#foca_audio").attr("data-play", "false");
			$("#reproducir_foca").attr("src", "imgs/play.png");
		}

		if($("#zorro_audio").data("play") == "true"){
			//Parar audio zorro
			$("#zorro_audio")[0].pause();
			$("#zorro_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#zorro_audio").data("play", "false");
			$("#zorro_audio").attr("data-play", "false")
			$("#reproducir_zorro").attr("src", "imgs/play.png");
		}

		if($("#orca_audio").data("play") == "true"){
			//Parar audio orca
			$("#orca_audio")[0].pause();
			$("#orca_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#orca_audio").data("play", "false");
			$("#orca_audio").attr("data-play", "false")
			$("#reproducir_orca").attr("src", "imgs/play.png");
		}

		var audio_oso = $("#oso_polar_audio");
		if(audio_oso.data("play") == "true"){
			audio_oso[0].pause();
			audio_oso[0].currentTime = 0;
			audio_oso.data("play", "false");
			audio_oso.attr("data-play", "false");
			$("#reproducir_oso").attr("src", "imgs/play.png");
		}else{
			audio_oso[0].play();
			audio_oso.data("play", "true");
			audio_oso.attr("data-play", "true");
			$("#reproducir_oso").attr("src", "imgs/pause.png");
		}		
	});

	$("#reproducir_zorro").click(function(){
		//Si se están reproduciendo los otros que se paren
		if($("#foca_audio").data("play") == "true"){
			//Parar audio foca
			$("#foca_audio")[0].pause();
			$("#foca_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#foca_audio").data("play", "false");
			$("#foca_audio").attr("data-play", "false")
			$("#reproducir_foca").attr("src", "imgs/play.png");
		}

		if($("#oso_polar_audio").data("play") == "true"){
			//Parar audio foca
			$("#oso_polar_audio")[0].pause();
			$("#oso_polar_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#oso_polar_audio").data("play", "false");
			$("#oso_polar_audio").attr("data-play", "false")
			$("#reproducir_oso").attr("src", "imgs/play.png");
		}

		if($("#orca_audio").data("play") == "true"){
			//Parar audio orca
			$("#orca_audio")[0].pause();
			$("#orca_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#orca_audio").data("play", "false");
			$("#orca_audio").attr("data-play", "false")
			$("#reproducir_orca").attr("src", "imgs/play.png");
		}

		var audio_zorro = $("#zorro_audio");
		if(audio_zorro.data("play") == "true"){
			audio_zorro[0].pause();
			audio_zorro[0].currentTime = 0;
			audio_zorro.data("play", "false");
			audio_zorro.attr("data-play", "false");
			$("#reproducir_zorro").attr("src", "imgs/play.png");
		}else{
			audio_zorro[0].play();
			audio_zorro.data("play", "true");
			audio_zorro.attr("data-play", "true");
			$("#reproducir_zorro").attr("src", "imgs/pause.png");
		}


	});

	$("#reproducir_foca").click(function(){
		//Si se están reproduciendo los otros que se paren
		if($("#zorro_audio").data("play") == "true"){
			//Parar audio foca
			$("#zorro_audio")[0].pause();
			$("#zorro_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#zorro_audio").data("play", "false");
			$("#zorro_audio").attr("data-play", "false")
			$("#reproducir_zorro").attr("src", "imgs/play.png");
		}

		if($("#oso_polar_audio").data("play") == "true"){
			//Parar audio foca
			$("#oso_polar_audio")[0].pause();
			$("#oso_polar_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#oso_polar_audio").data("play", "false");
			$("#oso_polar_audio").attr("data-play", "false")
			$("#reproducir_oso").attr("src", "imgs/play.png");
		}

		if($("#orca_audio").data("play") == "true"){
			//Parar audio orca
			$("#orca_audio")[0].pause();
			$("#orca_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#orca_audio").data("play", "false");
			$("#orca_audio").attr("data-play", "false")
			$("#reproducir_orca").attr("src", "imgs/play.png");
		}

		var audio_foca = $("#foca_audio");
		if(audio_foca.data("play") == "true"){
			audio_foca[0].pause();
			audio_foca[0].currentTime = 0;
			audio_foca.data("play", "false");
			audio_foca.attr("data-play", "false");
			$("#reproducir_foca").attr("src", "imgs/play.png");
		}else{
			audio_foca[0].play();
			audio_foca.data("play", "true");
			audio_foca.attr("data-play", "true");
			$("#reproducir_foca").attr("src", "imgs/pause.png");
		}	
	});

	$("#reproducir_orca").click(function(){
		//Si se están reproduciendo los otros que se paren
		if($("#zorro_audio").data("play") == "true"){
			//Parar audio foca
			$("#zorro_audio")[0].pause();
			$("#zorro_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#zorro_audio").data("play", "false");
			$("#zorro_audio").attr("data-play", "false")
			$("#reproducir_zorro").attr("src", "imgs/play.png");
		}

		if($("#oso_polar_audio").data("play") == "true"){
			//Parar audio foca
			$("#oso_polar_audio")[0].pause();
			$("#oso_polar_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#oso_polar_audio").data("play", "false");
			$("#oso_polar_audio").attr("data-play", "false")
			$("#reproducir_oso").attr("src", "imgs/play.png");
		}

		if($("#foca_audio").data("play") == "true"){
			//Parar audio foca
			$("#foca_audio")[0].pause();
			$("#foca_audio")[0].currentTime = 0;

			//Poner data-play a false
			$("#foca_audio").data("play", "false");
			$("#foca_audio").attr("data-play", "false")
			$("#reproducir_foca").attr("src", "imgs/play.png");
		}

		var audio_orca = $("#orca_audio");
		if(audio_orca.data("play") == "true"){
			audio_orca[0].pause();
			audio_orca[0].currentTime = 0;
			audio_orca.data("play", "false");
			audio_orca.attr("data-play", "false");
			$("#reproducir_orca").attr("src", "imgs/play.png");
		}else{
			audio_orca[0].play();
			audio_orca.data("play", "true");
			audio_orca.attr("data-play", "true");
			$("#reproducir_orca").attr("src", "imgs/pause.png");
		}	
	});

	$("#oso_polar_audio").bind('ended', function(){
	    $("#oso_polar_audio").data("play", "false");
	    $("#oso_polar_audio").attr("data-play", "false");
	    $("#reproducir_oso").attr("src", "imgs/play.png");
	});

	$("#zorro_audio").bind('ended', function(){
	    $("#zorro_audio").data("play", "false");
	    $("#zorro_audio").attr("data-play", "false");
	    $("#reproducir_zorro").attr("src", "imgs/play.png");
	});

	$("#foca_audio").bind('ended', function(){
	    $("#foca_audio").data("play", "false");
	    $("#foca_audio").attr("data-play", "false");
	    $("#reproducir_foca").attr("src", "imgs/play.png");
	});

	$("#orca_audio").bind('ended', function(){
	    $("#orca_audio").data("play", "false");
	    $("#orca_audio").attr("data-play", "false");
	    $("#reproducir_orca").attr("src", "imgs/play.png");
	});

	//Scroll menu derecha
	$("#a_oso").click(function(event){
		var e = event || window.event;
		e.preventDefault();
		$("html, body").animate({scrollTop: $("#s1").offset().top}, 1000);
	});

	$("#a_zorro").click(function(event){
		var e = event || window.event;
		e.preventDefault();
		$("html, body").animate({scrollTop: $("#s2").offset().top}, 1000);
	});

	$("#a_foca").click(function(event){
		var e = event || window.event;
		e.preventDefault();
		$("html, body").animate({scrollTop: $("#s3").offset().top}, 1000);
	});

	$("#a_orca").click(function(event){
		var e = event || window.event;
		e.preventDefault();
		$("html, body").animate({scrollTop: $("#s4").offset().top}, 1000);
	});
	
	$(window).scroll(function(event){
		var scroll = $(document).scrollTop();

		var s1Top = $("#s1").offset().top;
		var s1Bottom =  $("#s1").height() - 200;

		var s2Top = $("#s2").offset().top - 200;
		var s2Bottom =  ($("#s2").height() -200) * 2;

		var s3Top = $("#s3").offset().top - 200;
		var s3Bottom =  ($("#s3").height() - 100) * 3;

		var s4Top = $("#s4").offset().top - 200;
		var s4Bottom =  ($("#s4").height() - 100) * 4;

		if(scroll >= s1Top && scroll < s1Bottom){
			$("#a_oso").addClass("activo");
			$("#a_zorro").removeClass("activo");
			$("#a_foca").removeClass("activo");
			$("#a_orca").removeClass("activo");
		}else if(scroll >= s2Top && scroll < s2Bottom){
			$("#a_oso").removeClass("activo");
			$("#a_zorro").addClass("activo");
			$("#a_foca").removeClass("activo");
			$("#a_orca").removeClass("activo");
		}else if(scroll >= s3Top && scroll < s3Bottom){
			$("#a_oso").removeClass("activo");
			$("#a_zorro").removeClass("activo");
			$("#a_foca").addClass("activo");
			$("#a_orca").removeClass("activo");
		}else if(scroll >= s4Top && scroll < s4Bottom){
			$("#a_oso").removeClass("activo");
			$("#a_zorro").removeClass("activo");
			$("#a_foca").removeClass("activo");
			$("#a_orca").addClass("activo");
		}
	});
});