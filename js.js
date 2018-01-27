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
};

 

//Function Creates a card
function createCard(){

  var card=$("<div>");
  card.attr("class", "card");
  var cardBody=$("<div>");
  card.attr("class", "card-body");
  var cardTitle=$("<h5>");
  cardTitle.attr("class", "card-title");
  var p =$("<p>this is the random text</p>");
  p.attr("class","card-text");
  var a=$("<a>");
  a.attr("class", "btn btn-dark")

  $(card).append(cardBody);
  $(card).append(cardTitle);
  $(card).append(p);
  $(card).append(a);
  $("#card-wrapper").append(card);

}
createCard();
createCard();

createCard();
createCard();


// function cardTitle(){
//   var cardTitle=$("<div>");
// cardTitle.attr("class", "title");

// $(".card-title1").html("this is the title");
// }

// cardTitle();

// function cardInfo(){
//   var cardInfo=$("<div>");
// cardInfo.attr("class", "info");

// $(".card-text1").html("this pulls info");
// }
// cardInfo();

// function cardButton(){
// var cardButton=$("<div>");
// cardButton.attr("class", "button")

// }