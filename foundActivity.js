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


var activityName;
var activityType;
var activityDuration;
var activityTimeOfDay;
var activityPrice;
var activityDescription;

// $("#upload").on("click", function() {
//   image = $("#fileToUpload").val().trim();

//   database.ref().push({
//     image: image,
//   });
// });

// whenever a user clicks the button
$("#add-activity").on("click", function() {

//   // get the input values
  activityName = $("#name").val().trim();
  activityType = $("#type").val().trim();
  activityDuration = $("#duration").val().trim();
  activityTimeOfDay = $("#timeOfDay").val().trim();
  activityPrice = $("#price").val().trim();
  activityDescription = $("#description").val().trim();
  // image = $("#fileToUpload").val().trim();


  // push to firebase
  database.ref().push({
    activityName: activityName,
    activityType: activityType,
    activityDuration: activityDuration,
    activityTimeOfDay: activityTimeOfDay,
    activityPrice: activityPrice,
    activityDescription: activityDescription,
  });
});

database.ref().on("child_added", function(childSnapshot) {

});


// 'L3kgSnkgzYty0Xucly6'

// access database
var ref = database.ref();

ref.on('value', getData, errData);

  // function to retrieve data.
  function getData(data) {
    // console.log(data.val());
    var dowhat = data.val();
    var keys = Object.keys(dowhat);
    

    // indexing through the keys but throwing 'undefined';
    // for(var i = 0; i < keys.length; i++){
    //   var k = keys[i];
    //   var activity = dowhat[k].activity;
      
    //   console.log(activity);
    }
  }

  function errData(err){
    console.log('Error!');
    console.log(err);
  }




// Google maps

