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

var activityName;
var street;
var city;
var state;
var activityType;
var activityDuration;
var activityTimeOfDay;
var activityPrice;
var activityDescription;
var streetNumber;
var streetName;

var ref = database.ref();

ref.on('value', getData, errData);

  // function to retrieve data.
  function getData(data) {
    // console.log(data.val());
    var dowhat = data.val();
    var keys = Object.keys(dowhat);
    
    // indexing through the keys;
    for(var i = 0; i < keys.length; i++){
      
      let k = keys[i];

      let activityName = dowhat[k].activityName;
      let activityType = dowhat[k].activityType;
      let activityDuration = dowhat[k].activityDuration;
      let activityTimeOfDay = dowhat[k].activityTimeOfDay;
      let activityDescription = dowhat[k].activityDescription;
      let streetNumber = dowhat[k].streetNumber;
      let streetName = dowhat[k].streetName;
      let city = dowhat[k].city;
      let state = dowhat[k].state;
      let activityPrice = dowhat[k].activityPrice;
 
      // will need to place all of this into seperate function.
      console.log(activityType, activityPrice);
      $('#activity-name').text(activityName);
      $('#activity-type').text(activityType);
      $('#activity-duration').text(activityDuration + " hours");
      $('#activity-time').text(activityTimeOfDay);
      $('#activity-description').text(activityDescription);
      $('#event-location').text(streetNumber + " " + streetName + " " + city + ", " + state);
      $('#price-range').text("$" + activityPrice);

    }

  }

  function errData(err){
    console.log('Error!');
    console.log(err);
  }
