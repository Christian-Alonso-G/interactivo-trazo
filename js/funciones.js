// JavaScript Document

$(document).ready(

	function() {
		
 $("#inicio").click(function (){
	 $("#pantalla1").hide();
	 $("#pantalla2").show();
		});
		
$("#regresa1").click(function (){
	 $("#pantalla2").hide();
	 $("#pantalla1").show();
		});	
		
$("#avanza1").click(function (){
	 $("#pantalla2").hide();
	 $("#pantalla3").show();
		});		
		
$("#regresa2").click(function (){
	 $("#pantalla3").hide();
	 $("#pantalla2").show();
		});	
		
$("#avanza2").click(function (){
	 $("#pantalla3").hide();
	 $("#pantalla4").show();
		});	
		
$("#regresa3").click(function (){
	 $("#pantalla4").hide();
	 $("#pantalla3").show();
		});	
		
$("#avanza3").click(function (){
	 $("#pantalla4").hide();
	 $("#pantalla5").show();
		});	
		
$("#regresa4").click(function (){
	 $("#pantalla5").hide();
	 $("#pantalla4").show();
		});	
		
$("#avanza4").click(function (){
	 $("#pantalla5").hide();
	 $("#pantalla6").show();
		});	
		
$("#regresa5").click(function (){
	 $("#pantalla6").hide();
	 $("#pantalla5").show();
		});	
		
$("#avanza5").click(function (){
	 $("#pantalla6").hide();
	 $("#pantalla7").show();
		});	
		
$("#regresa6").click(function (){
	 $("#pantalla7").hide();
	 $("#pantalla6").show();
		});	
		
$("#avanza6").click(function (){
	 $("#pantalla7").hide();
	 $("#pantalla8").show();
		});			

$("#regresa7").click(function (){
	 $("#pantalla8").hide();
	 $("#pantalla7").show();
		});	
		
$("#avanza7").click(function (){
	 $("#pantalla8").hide();
	 $("#pantalla9").show();
		});			
		
$("#regresa8").click(function (){
	 $("#pantalla9").hide();
	 $("#pantalla8").show();
		});	
		
$("#avanza8").click(function (){
	 $("#pantalla9").hide();
	 $("#pantalla10").show();
		});
		
$("#regresa9").click(function (){
	 $("#pantalla10").hide();
	 $("#pantalla9").show();
		});	
		
$("#avanza9").click(function (){
	 $("#pantalla10").hide();
	 $("#pantalla11").show();
		});					

$("#regresa10").click(function (){
	 $("#pantalla11").hide();
	 $("#pantalla10").show();
		});	
		
$("#avanza10").click(function (){
	 $("#pantalla11").hide();
	 $("#pantalla12").show();
		});		
		
$("#regresa11").click(function (){
	 $("#pantalla12").hide();
	 $("#pantalla11").show();
		});	
		
$("#avanza11").click(function (){
	 $("#pantalla12").hide();
	 $("#pantalla13").show();
		});	
		
$("#regresa12").click(function (){
	 $("#pantalla13").hide();
	 $("#pantalla12").show();
		});	
		
$("#avanza12").click(function (){
	 $("#pantalla13").hide();
	 $("#pantalla14").show();
		});	
		
$("#regresa13").click(function (){
	 $("#pantalla14").hide();
	 $("#pantalla13").show();
		});	
		
$("#avanza13").click(function (){
	 $("#pantalla14").hide();
	 $("#pantalla1").show();
		});										
																	
	}
	);
	
	
//definimos la variable que incrementará el valor de un ángulo que parte de 0
var valor=-1.5;
function girar(){

//Incremento progresivo del ángulo con valor 0.04; el valor 0.04 establece la precisión del movimiento. A mayor valor, menor precisión. Si damos un valor muy alto, el movimiento irá a "saltos"
valor=valor+0.02;

//Generamos valores de seno y coseno de la variable valor
posicion=Math.cos(valor);
posicioncos=Math.sin(valor);

// Asignamos las fórmulas anteriores a dos variables que establecerán
// los movimientos horizontal y vertical
posicion1=(posicion*122)+249;
posicion2=(posicioncos*122)+129;

//Asignamos las variables anteriores a las posiciones left (horizontal) y top (vertical)
capa.style.left=posicion1+'px';
capa.style.top=posicion2+'px';
//Hacemos que la función se repita una y otra vez cada 10 milisegundos

setTimeout('girar()',40);

}


   
