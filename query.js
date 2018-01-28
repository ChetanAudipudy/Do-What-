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

var activityArray = [];
var durationArray = [];
var timeOfDayArray = [];
var priceArray = [];

$(document).ready(function() {

    $("#submit").on("click", function() {

        $("input[name='activity[]']:checked").each(function () {
            activityArray.push(this.value);
            console.log(activityArray);
        });

        $("input[name='duration[]']:checked").each(function () {
            durationArray.push(this.value);
            console.log(durationArray);
        });

        $("input[name='timeOfDay[]']:checked").each(function () {
            timeOfDayArray.push(this.value);
            console.log(timeOfDayArray);
        });

        $("input[name='pricePoint[]']:checked").each(function () {
            priceArray.push(this.value);
            console.log(priceArray);
        });

    });
});


// const activityType = database.child('activityType');
// const query = events.orderByKey().equalTo('Outdoor Activities');

// console.log(query);

// query.on('value', snap => {
//   // render data to HTML
// });