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

const database = firebase.database();

var queryArray = {
  activityType: []


}


const activityType = database.child('activityType');
const query = events.orderByKey().equalTo('Outdoor Activities');
events.orderByKey().equalTo('Outdoor Activities');
events.orderByKey().equalTo('Outdoor Activities');
events.orderByKey().equalTo('Outdoor Activities');

console.log(query);

query.on('value', snap => {
  // render data to HTML
});