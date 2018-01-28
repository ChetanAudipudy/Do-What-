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

const database = firebase.database().ref();

var activityTypeArray = [];
var durationArray = [];
var timeOfDayArray = [];
var priceArray = [];

$(document).ready(function() {

    $("#submit").on("click", function() {
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
        $("input[name='pricePoint[]']:checked").each(function () {
            priceArray.push(this.value);
        });

        // Create a variable to link to firebase
        var activityRef = firebase.database().ref();

        // Reference data objects in Firebase
        activityRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var activityData = childSnapshot.val();

                // Compare data object child values to input values in array with for loop
                for (i = 0; i < activityTypeArray.length; i++) {
                if (activityTypeArray[i] == activityData.activityType) {

                    for (j = 0; j < durationArray.length; j++) {
                    if (durationArray[j] == activityData.activityDuration) {

                        for (k = 0; k < timeOfDayArray.length; k++) {
                        if (timeOfDayArray[k] == activityData.activityTimeOfDay) {

                            for (m = 0; m < priceArray.length; m++) {
                            if (priceArray[m] == activityData.activityPrice) {
                                console.log(activityData.activityName);
                                console.log(activityData.activityDuration);
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