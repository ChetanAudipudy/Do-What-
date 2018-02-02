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



var activity_Name;
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
      };
  });
};

var cardID = 0;

$(document).ready(function() {

//     var database = firebase.database().ref();
//     database.on("value" , function(snapshot){
//         snapshot.forEach(function(childSnapshot){

//         })
//         var actData = snapshot.val();
//         createCard();
//     })


    $("#submit").on("click", function() {

        var userCity = sessionStorage.getItem("cityInput");

        console.log(userCity);

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
        activityRef.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var activityData = childSnapshot.val();

              // console.log(activityData.activityCity);

                // Compare data object child values to input values in array with for loop
                for (i = 0; i < activityTypeArray.length; i++) {
                    if (activityTypeArray[i] == activityData.activityType) {

                        for (j = 0; j < durationArray.length; j++) {
                            if(durationArray[j] == activityData.activityDuration) {

                                for (k = 0; k < timeOfDayArray.length; k++) {
                                    if (timeOfDayArray[k] == activityData.activityTimeOfDay) {

                                        for (m = 0; m < priceArray.length; m++) {
                                            if (priceArray[m] == activityData.activityPrice) {

                                    if (userCity == activityData.city) {

                                        function createCard(){

                                            var card = $("<div>");
                                            card.addClass('card');
                                            card.attr("width", "14rem;");

                                            var cardBody = $("<div>");
                                            card.addClass('card-body');

                                            var cardTitle = $("<div>");
                                            cardTitle.addClass('card-title');

                                            var btnID = "btnID" + cardID;
                                            var button = $('<button/>');
                                            button.attr("class", "btn btn-dark detail-button");
                                            button.attr("id" , btnID);
                                            button.data("activity", activityData);
                                            button.text("Details");

                                            var title = $("<div>");
                                            title.attr("id", "titleID" + cardID)
                                            title.addClass('card-title')

                                            var text = $("<div>");
                                            text.attr("id", "textID" + cardID)
                                            text.addClass('')

                                            $(".card-container").append(card);
                                            $(card).append(cardBody);

                                            $(cardBody).append(title);
                                            $(cardBody).append(text);

                                            $(cardBody).append(button);

                                            $("#titleID" + cardID).html(activityData.activityName + "<br><br>");
                                            $("#textID" + cardID).html("Price: " + activityData.activityPrice + "<br><br>");

                                            cardID++;

                                        };





                                        createCard();                           

                                    };


                                };break;
                            };
                        };break;
                    };
                };break;
            };
        };break;
    };
});
        });

        $(document).on("click" , ".detail-button" , function(e){

            bootbox.dialog({
                onEscape : true,
                backdrop : true,
                closeButton : false,
                title: '<h1 class = "text-center">' + $(this).data("activity").activityName + '</h1>',
                message: '<h4 class = "bg-light">Price: </h4>' + "<p>" + $(this).data("activity").activityPrice + "</p>"
                + '<h4 class = "bg-light">Type:</h4>' + "<p>" + $(this).data("activity").activityType + "</p>"
                + '<h4 class = "bg-light">Duration: </h4>' + "<p>" + $(this).data("activity").activityDuration + "</p>"
                + '<h4 class = "bg-light">Time of the Day: </h4>' + "<p>" + $(this).data("activity").activityTimeOfDay + "</p>"
                + '<h4 class = "bg-light">Location: </h4>' + "<p>" + $(this).data("activity").address + ", " + $(this).data("activity").city 
                + ", " + $(this).data("activity").state + "</p>"


            });
        })
    });

});
