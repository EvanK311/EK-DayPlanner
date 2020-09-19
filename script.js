
//TODO: add click event listener for save buttons 

//TODO: grab value of text area and save to var. (need to be able to save text from the area that is same row as button.)

//TODO: using localStorage.setItem, save text to local storage

//TODO: when page is refreshed, saved data can be retrieved from local storage using localStorage.getItem and show them in correct text area.(set saved local)
console.log("never give up, yo")

var daContainer = $(".container")
var timeArray = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",]

var currenTime = moment().format('H');
var saveText = []

// Displaying today and current time
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));



// loop to dynamically produce the times
for (i = 0; i < timeArray.length; i++) {
    var rowEl = $("<div class = 'row time-block'>");
    var timeSpot = $("<div class = 'col-md-2 hour'>")
    var textSpot = $("<textarea data-id = savedIt class = 'col-md-8'>");
    var saveMe = $("<button data-id = savedIt class = 'col-md-2 saveBtn'>")
    
    timeFix = i + 9
    timeFix++
    
// assigning classes to elements
    timeSpot.text(timeArray[i])
    saveMe.text("Save")
    // saveMe.attr("data-savedIt")
    // testSpot.attr("data-savedIt")
    daContainer.append(rowEl)
    rowEl.append(timeSpot)
    rowEl.append(textSpot)
    rowEl.append(saveMe)

    // if/else statements determing color of time blocks depending on time of day
    if (currenTime === timeFix) {
        timeSpot.attr("class", "hour col-md-2 present")
        textSpot.attr("class", "col-md-8 present")
    } else {
        if (timeFix < currenTime) {
            timeSpot.attr("class", "hour col-md-2 past")
            textSpot.attr("class", "col-md-8 past")
        } else {
            if (timeFix > currenTime) {
                timeSpot.attr("class", "hour col-md-2 future")
                textSpot.attr("class", "col-md-8 future")
            }            
        }
    }


   
}
// click event that stores information from textarea to local storage
$(".saveBtn").on("click", function (event) {
    event.preventDefault()
    if ($(this)) {
        localStorage.setItem("saveStuff", JSON.stringify(saveText))
    }
        
})