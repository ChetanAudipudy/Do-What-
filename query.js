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
var database = firebase.database();
var activityTypeArray = [];
var durationArray = [];
var timeOfDayArray = [];
var priceArray = [];

var id = 0;


function createCard(){

    id++;

  var outer = $("<div>")
  var card=$("<div>");
  card.attr("class", "card");
  card.attr("style" , "width : 18rem;");
  card.attr("id" , id);
  card.text(id);
  var cardBody=$("<div>");
  card.attr("class", "card-body");
  var cardTitle=$("<h5> test the title </h5>");
  cardTitle.attr("class", "card-title");
  var p =$("<p>this is the random text</p>");
  p.attr("class","card-text");
  $(outer).append(card);
  $(card).append(cardBody);
  $(card).append(cardTitle);
  $(card).append(p);
  $("#card-wrapper").append(card);

};
$(document).ready(function() {
    $("#submit").on("click", function() {
        id = 0;
        $("#card-wrapper").empty();
        // grab values from checkbox inputs and store in respective arrays
        $("input[name='activity[]']:checked").each(function () {
            activityTypeArray.push(this.value);
        });
        $("input[name='duration[]']:checked").each(function () {
            durationArray.push(this.value);
        });
        $("input[name='timeOfDay[]']:checked").each(function () {
            timeOfDayArray.push(this.value);
        });
        $("input[name='pricePoint[]']:checked").each(function () {
            priceArray.push(this.value);
        });
        // Create a variable to link to firebase
        var activityRef = firebase.database().ref();
        // Reference data objects in Firebase
        activityRef.on('value', function(snapshot) {
            $("#card-wrapper").empty();
            snapshot.forEach(function(childSnapshot) {
              var activityData = childSnapshot.val();
                // Compare data object child values to input values in array with for loop
                for (i = 0; i < activityTypeArray.length; i++) {
                if (activityTypeArray[i] == activityData.activityType) {
                    for (j = 0; j < durationArray.length; j++) {
                    if(durationArray[j] == activityData.activityDuration) {
                        for (k = 0; k < timeOfDayArray.length; k++) {
                        if (timeOfDayArray[k] == activityData.activityTimeOfDay) {
                            for (m = 0; m < priceArray.length; m++) {
                            if (priceArray[m] == activityData.activityPrice) {
                                createCard();
                                $(".card-title").text(activityData.activityName);
                                // $(".card-text").text(activityData.activityPrice);
                                break;
                            };
                            };
                        };
                        };
                    };
                    };
                };
                };
            });
        });
    });
});