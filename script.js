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
console.log("hello")

var daContainer = $(".container")
var timeArray = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",]
var rowEl = $('<div>')
var textSpot = $('<textarea>')
var currenTime = moment().format('H');


// Displaying today and current time
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));




for (i = 0; i < timeArray.length; i++) {
    var rowEl = $("<div class = 'row time-block'>");
    var timeSpot = $("<div class = 'col-md-2 hour'>")
    var textSpot = $("<textarea data-id = savedIt class = 'col-md-8'>");
    var saveMe = $("<button data-id = savedIt class = 'col-md-2 saveBtn'>")
    
    timeFix = i + 9
    timeFix++
    

    timeSpot.text(timeArray[i])
    saveMe.text("Save")
    // saveMe.attr("data-savedIt")
    // testSpot.attr("data-savedIt")
    daContainer.append(rowEl)
    rowEl.append(timeSpot)
    rowEl.append(textSpot)
    rowEl.append(saveMe)

    if (currenTime === timeFix) {

        timeSpot.attr("class", "hour col-md-2 present")
        textSpot.attr("class", "col-md-8 present")
    } else {
        if (timeFix < currenTime) {

            timeSpot.attr("class", "hour col-md-2 past")
            textSpot.attr("class", "col-md-8 past")
        }
        else {
            if (timeFix > currenTime) {
                timeSpot.attr("class", "hour col-md-2 future")
                textSpot.attr("class", "col-md-8 future")
            }
            
        }
    }


   
}
$(".saveBtn").on("click", function (event) {
    if ($(this))
    
    console.log($(this))
    console.log($(this).attr("data-id"))
})