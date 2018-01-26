$(document).on("click" , ".opScBtn" , function(){

	$("#rightBox").empty();

	$("#rightBox").html("<h3> Choose a location! </h3> <input id='city' name='city' autocomplete='on' data-country='us'> ");
})



// code for the accordion drowpdown
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}