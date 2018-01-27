$(document).ready(function() {

	$("#rightBox").html("<h3> Choose a location! </h3> <input id='city' name='city' autocomplete='on' data-country='us'> ");
})

var string;
var city;
var state;
var country;

$("#submit").on("click", function(event) {
    event.preventDefault();

    // split input string
    string = $("#autocomplete").val().trim();
    city = string.split(", ")[0];
    state = string.split(", ")[1];
    country = string.split(", ")[2];

    $("#dynamicDiv").text(city);

    var findActivity = $('<button/>').attr({
      class: "btn btn-dark",
      style: "width: 350px",
    }).text('Find Activity');

    var createActivity = $('<button/>').attr({
      class: "btn btn-dark",
      style: "width: 350px",
    }).text('Create Activity');

    $("#locationField").text("");
    $("#buttons").append(findActivity);
    $("#buttons").append("<br><br>");
    $("#buttons").append(createActivity);
});

// Google API location and form autocomplete
var placeSearch, autocomplete;

function initAutocomplete() {

  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['(cities)']});

  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    }
  }

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  };
};