$(document).on("click" , ".opScBtn" , function(){

	$("#rightBox").empty();

	$("#rightBox").html("<h3> Choose a location! </h3> <input id='city' name='city' autocomplete='on' data-country='us'> ");
})