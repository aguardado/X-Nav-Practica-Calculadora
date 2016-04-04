$(document).ready(function() {
	$("#display").val("");

	$("#display").change(function(){
		console.log("cambia de valor");
	});

	$(".button").click(function(e){
		e.preventDefault();
     	var a = $(this).attr("id");
      	$("#display").val($("#display").val() + a); 
	});

	$("#reset").click(function() {
		$("#display").val("0");
	});


	$("#igual").click(function() {
		$("#display").val(eval($("#display").val()));
	});
});