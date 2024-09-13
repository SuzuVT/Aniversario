
let i = 0;
let text1 = "¡Buenos días amorcito!";
let text2 = "Hoy es el día en el que hacemos 1 año de relación y he decidido programarte un pequeño álbum, no sabía que poner exactamente, pero quise poner recuerdos que considero muy bonitos en la relación. Para verlos, solo tendrás que pulsar en el michi de abajo."
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};
