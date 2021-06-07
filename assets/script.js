//Added variable for moment.js timestamp as well as time format//
const currentDate = moment().format("dddd, MMM Do YYYY");
//Appended currentTime variable to the p element in jumbotron with currentDay id//
$("#currentDay").append(currentDate);

//Made an array for different hours in the workday and saved it in a variable//
const timesArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

const input = $("#textEl");
const save = $("#saveEl");

for (let i=0; i < timesArr.length; i++) {
    let hour = timesArr[i];

    input.attr("id", hour);

    let savedText = localStorage.getItem(hour);
    input.val(savedText);

    save.attr("date-time", hour);

    save.on("click", function() {
        localStorage.setItem(hour, input.val());
    });
};
