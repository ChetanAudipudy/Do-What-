// Initialize Firebase
var config = {
  apiKey: "AIzaSyAhZI-g5KRMum-cgklXm4j8H8bbagmhJws",
  authDomain: "dowhat-946f1.firebaseapp.com",
  databaseURL: "https://dowhat-946f1.firebaseio.com",
  projectId: "dowhat-946f1",
  storageBucket: "dowhat-946f1.appspot.com",
  messagingSenderId: "39741177926"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// // Create a reference with an initial file path and name
// var storage = firebase.storage();
// var pathReference = storage.ref('images/stars.jpg');

// // Create a reference from a Google Cloud Storage URI
// var gsReference = storage.refFromURL('gs://bucket/images/stars.jpg')

// // Create a reference from an HTTPS URL
// // Note that in the URL, characters are URL escaped!
// var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');

// var image;
var activityName;
var street;
var city;
var state;
var activityType;
var activityDuration;
var activityTimeOfDay;
var activityPrice;
var activityDescription;

// create function for input validation
// function inputValidation(){

//   // create array of variables
// function inputValidation () {

//   var inputArray =[activityName, activityType, activityDuration, activityTimeOfDay, activityPrice]

//   for (var i = 0; i < inputArray.length; i++) {
//     if(inputArray[i] == ""){
//       $("#error").html('Please fill out required fields.');
//     }
//   }
// }

$(document).ready(function() {

// whenever a user clicks the button
  $("#add-activity").on("click", function() {

    // get the input values
    activityName = $("#name").val().trim();
    streetNumber = $("#street_number").val().trim();
    streetName = $("#route").val().trim();
    city = $("#locality").val().trim();
    state = $("#administrative_area_level_1").val().trim();
    activityType = $("#type").val().trim();
    activityDuration = $("#duration").val().trim();
    activityTimeOfDay = $("#timeOfDay").val().trim();
    activityPrice = $("#price").val().trim();
    activityDescription = $("#description").val().trim();
    // image = $("#fileToUpload").val().trim();

    console.log(activityName);
    console.log(streetNumber);
    console.log(streetName);
    console.log(city);
    console.log(state);
    console.log(activityType);
    console.log(activityDuration);
    console.log(activityTimeOfDay);
    console.log(activityPrice);
    // console.log(fileToUpload);

    // call input validation function

    // inputValidation();

    // push to firebase
    database.ref().push({
      activityName: activityName,
      streetNumber: streetNumber,
      streetName: streetName,
      city: city,
      state: state,
      activityType: activityType,
      activityDuration: activityDuration,
      activityTimeOfDay: activityTimeOfDay,
      activityPrice: activityPrice,
      activityDescription: activityDescription,
    });

  });

});

      // This example displays an address form, using the autocomplete feature
      // of the Google Places API to help users fill in the information.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
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

// var classArray = ["activity", "duration", "timeOfDay", "pricePoint", "familyFriendly"]


//     $("#submit").on("click", function() {


        // if($('input:checkbox').hasClass('activity')) {
        //     var checkedValues = $('input:checkbox:checked').map(function() {
        //         activityType.push(this.value);
        //     }).get();

//         } else {

//         if($('input:checkbox').hasClass('duration')) {
//             var checkedValues = $('input:checkbox:checked').map(function() {
//                 activityDuration.push(this.value);
//                 console.log(activityDuration);
//             }).get();

//         // } else {

//         // if($('input:checkbox').hasClass('duration')) {
//         //     var checkedValues = $('input:checkbox:checked').map(function() {
//         //         activityDuration.push(this.value);
//         //         console.log(activityDuration);
//         //     }).get();
//         };

//     };
// });
// });