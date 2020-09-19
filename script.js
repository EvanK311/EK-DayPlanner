

var daContainer = $(".container")
var timeArray = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",]

var currenTime = moment().format('H');
var saveText =
    [{ blankText: 0, text: "" },
    { blankText: 1, text: "" },
    { blankText: 2, text: "" },
    { blankText: 3, text: "" },
    { blankText: 4, text: "" },
    { blankText: 5, text: "" },
    { blankText: 6, text: "" },
    { blankText: 7, text: "" },
    { blankText: 8, text: "" }];

var storageCheck = JSON.parse(localStorage.getItem("plans"))

if (storageCheck != null) {
    saveText = storageCheck;
}

// Displaying today and current time
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));



// loop to dynamically produce the times
for (i = 0; i < timeArray.length; i++) {
    var rowEl = $("<div class = 'row time-block'>");
    var timeSpot = $("<div class = 'col-md-2 hour'>")
    var textSpot = $("<textarea data-id = savedIt class = 'col-md-8'>");
    textSpot.text(saveText[i].text)
    var saveMe = $("<button data-id = savedIt class = 'col-md-2 saveBtn'>")
    saveMe.attr("data-savedIt", i)
    textSpot.attr("data-savedIt", i)
    timeFix = i + 9
    timeFix++
    
// assigning classes to elements
    timeSpot.text(timeArray[i])
    saveMe.text("Save")    
    daContainer.append(rowEl)
    rowEl.append(timeSpot)
    rowEl.append(textSpot)
    rowEl.append(saveMe)

    // if/else statements determing color of time blocks depending on time of day
    if (currenTime === timeFix) {
        timeSpot.attr("class", "hour col-md-2 present");
        textSpot.attr("class", "col-md-8 present");
    } else {
        if (timeFix < currenTime) {
            timeSpot.attr("class", "hour col-md-2 past");
            textSpot.attr("class", "col-md-8 past");
        } else {
            if (timeFix > currenTime) {
                timeSpot.attr("class", "hour col-md-2 future");
                textSpot.attr("class", "col-md-8 future");
            }            
        }
    }


   
}
// click event that stores information from textarea to local storage
$(".saveBtn").on("click", function (event) {
    var loggedInfo = ($(this).attr("data-savedIt"));
    var loggedText = $(`textarea[data-savedIt=${loggedInfo}]`).val();
    for (t = 0; t < saveText.length; t++) {
        if (saveText[t].blankText === parseInt(loggedInfo)) {
            saveText[t].text = loggedText;
        }
    }
    
    localStorage.setItem("plans", JSON.stringify(saveText))
    console.log(saveText)
})