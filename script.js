// TODO: Create one row with time, text area, and button using jquery.
// layout for row/col format---
// {/* <div class="row time-block">
//       <div class="col-md-2 hour">
//         9AM
//       </div>
//       <textarea class="col-md-8">

//       </textarea>
//       <button class="col-md-2 saveBtn">
//         Save
//       </button>
//     </div> */}
$(document).ready(function (){
var timeArray = {
    morning: ["9AM", "10AM", "11AM",], 
    evening: ["12PM", "1PM", "2PM", "3PM", "4PM", "5PM",]
};

var scheduleColors = {
    Morning: ["9AM", "10AM", "11AM",],
    Evening: ["12PM", "1PM", "2PM", "3PM", "4PM", "5PM",]
} 
var i = 0
$("#currentDay").text(moment().calendar());


})
//TODO: Show time at top of the calendar, use moment.js to grab current time. set text of current time ptag with ID of currentDay(DONE) 

//TODO: create row, create div, textarea, and a button, give them content, append them to row, then append row to page.(not repetitive method like loop.)

//TODO:create array to hold these times (timeArray["9am","10am", "11am"])(DONE)

//TODO:apply elements to some content

//TODO: use For loop to loop array of hours and create div for row. create time blocks for standard business hours. 

//TODO: use moment.js to compare current time to page

//TODO: give elements classes they need using if statement and moment.js to see if the hour we're looping over is >= hour passed. if so give text area class of past

//TODO: add click event listener for save buttons 

//TODO: grab value of text area and save to var. (need to be able to save text from the area that is same row as button.)

//TODO: using localStorage.setItem, save text to local storage

//TODO: when page is refreshed, saved data can be retrieved from local storage using localStorage.getItem and show them in correct text area.(set saved local)
console.log(moment().format());