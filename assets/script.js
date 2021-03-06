//Added variable for moment.js timestamp as well as time format//
const currentDate = moment().format("dddd, MMM Do YYYY");
//Appended currentTime variable to the p element in jumbotron with currentDay id//
$("#currentDay").append(currentDate);

//Made an array for different hours in the workday and saved it in a variable//
const timesArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

const input = $("#textEl");
const save = $("#saveEl");
//Made a variable to hold the current time using moment.js//
let currentTime = moment().hour();
//created a for loop to go through the different hours of the day and save data to local storage//
for (let i=9; i <= 17; i++) {
    let hour = timesArr[i];
    //If statment to change color of rows depending on the time of day//
if (currentTime === i) {
    $(`#${i}`).addClass('bg-danger')
} else if (currentTime < i) {
    $(`#${i}`).addClass('bg-success');
} else if (currentTime > i) {
    $(`#${i}`).addClass('bg-secondary')
}

// created variable to get item value from local storage and display it in the saved time slot//
let savedText = localStorage.getItem(i);
console.log(savedText,i)
$(`#${i}-txt`).val(savedText);

};
//Used jquery to add event listenr to saveBtn and save the user input for that specific time slot in local storage//
$('.saveBtn').on('click', function(event){
    event.preventDefault();
    var time = $(this).parent().attr('id');
    var user = $(this).siblings('textarea').val();
    console.log(time, user);
    localStorage.setItem(time, user);
})