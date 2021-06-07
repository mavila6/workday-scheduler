//Added variable for moment.js timestamp as well as time format//
const currentDate = moment().format("dddd, MMM Do YYYY");
//Appended currentTime variable to the p element in jumbotron with currentDay id//
$("#currentDay").append(currentDate);

//Made an array for different hours in the workday and saved it in a variable//
const timesArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

const input = $("#textEl");
const save = $("#saveEl");
//created a for loop to go through the different hours of the day and save data to local storage//
for (let i=0; i < timesArr.length; i++) {
    let hour = timesArr[i];

    let savedText = localStorage.getItem(hour);
    input.val(savedText);

    save.on("click", function() {
        localStorage.setItem(hour, input.val());
    });
};
//Put an array into a variable to correspond to each hour interval and be used in an if statement to change colors based on time//
let timeSlot = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//Made a variable to hold the current time using moment.js//
let currentTime = moment().hour();
//Made a variable to define i value//
let i = timeSlot.length;
//If statment to change color of rows depending on the time of day//
if (currentTime === timeSlot[i]) {
    input.css("background-color", "#ff6961");
} else if (currentTime < timeSlot[i]) {
    input.css("background-color", "#d3d3d3");
} else if (currentTime > timeSlot[i]) {
    input.css("background-color", "#77dd77");
}
//Code logic is incomplete will continue to work on functionality//