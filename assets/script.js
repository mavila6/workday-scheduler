//Added variable for moment.js timestamp as well as time format//
const currentTime = moment().format("dddd, MMM Do YYYY");
//Appended currentTime variable to the p element in jumbotron with currentDay id//
$("#currentDay").append(currentTime);

