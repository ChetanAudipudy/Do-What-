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


// // code for
// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -33.8688, lng: 151.2195},
//     zoom: 13
//   });
//   var card = document.getElementById('pac-card');
//   var input = document.getElementById('pac-input');
//   var types = document.getElementById('type-selector');
//   var strictBounds = document.getElementById('strict-bounds-selector');

//   map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

//   var autocomplete = new google.maps.places.Autocomplete(input);

//   // Bind the map's bounds (viewport) property to the autocomplete object,
//   // so that the autocomplete requests use the current map bounds for the
//   // bounds option in the request.
//   autocomplete.bindTo('bounds', map);

//   var infowindow = new google.maps.InfoWindow();
//   var infowindowContent = document.getElementById('infowindow-content');
//   infowindow.setContent(infowindowContent);
//   var marker = new google.maps.Marker({
//     map: map,
//     anchorPoint: new google.maps.Point(0, -29)
//   });
// };



// Function Creates a card
// function createCard(){

//   var outer = $("<div>")
//   var card=$("<div>");
//   card.attr("class", "card");
//   card.attr("style" , "width : 18rem;");
//   var cardBody=$("<div>");
//   card.attr("class", "card-body");
//   var cardTitle=$("<h5> test the title </h5>");
//   cardTitle.attr("class", "card-title");
//   var p =$("<p>this is the random text</p>");
//   p.attr("class","card-text");

// }
// createCard();
// createCard();
// createCard();
// createCard();



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

  // autocomplete.addListener('place_changed', function() {
  //   infowindow.close();
  //   marker.setVisible(false);
  //   var place = autocomplete.getPlace();
  //   if (!place.geometry) {
  //     // User entered the name of a Place that was not suggested and
  //     // pressed the Enter key, or the Place Details request failed.
  //     window.alert("No details available for input: '" + place.name + "'");
  //     return;
  //   }

  //   // If the place has a geometry, then present it on a map.
  //   if (place.geometry.viewport) {
  //     map.fitBounds(place.geometry.viewport);
  //   } else {
  //     map.setCenter(place.geometry.location);
  //     map.setZoom(17);  // Why 17? Because it looks good.
  //   }
  //   marker.setPosition(place.geometry.location);
  //   marker.setVisible(true);

  //   var address = '';
  //   if (place.address_components) {
  //     address = [
  //       (place.address_components[0] && place.address_components[0].short_name || ''),
  //       (place.address_components[1] && place.address_components[1].short_name || ''),
  //       (place.address_components[2] && place.address_components[2].short_name || '')
  //     ].join(' ');
  //   }

  //   infowindowContent.children['place-icon'].src = place.icon;
  //   infowindowContent.children['place-name'].textContent = place.name;
  //   infowindowContent.children['place-address'].textContent = address;
  //   infowindow.open(map, marker);
  // });

  // // Sets a listener on a radio button to change the filter type on Places
  // // Autocomplete.
  // function setupClickListener(id, types) {
  //   var radioButton = document.getElementById(id);
  //   radioButton.addEventListener('click', function() {
  //     autocomplete.setTypes(types);
  //   });
  // }

  // setupClickListener('changetype-all', []);
  // setupClickListener('changetype-address', ['address']);
  // setupClickListener('changetype-establishment', ['establishment']);
  // setupClickListener('changetype-geocode', ['geocode']);

  // document.getElementById('use-strict-bounds')
  //     .addEventListener('click', function() {
  //       console.log('Checkbox clicked! New state=' + this.checked);
  //       autocomplete.setOptions({strictBounds: this.checked});
  //     });
// }

