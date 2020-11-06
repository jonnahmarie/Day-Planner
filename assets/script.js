//global variables
var currentDay = moment().format("dddd MMMM Do YYYY");
$("#currentDay").text(currentDay);
var hourText = [
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm"
];
var saveBtn = $("<button>")
var buttonId = "123456789".split();

//dynamically setting up the HTML elements
function blockSetup() {
    for (var i = 0; i < hourText.length; i++) {
        var timeBlockRow = $("<div>");
        var hourCol = $("<div>");
        var textCol = $("<div>");
        var saveCol = $("<div>");
        var hourBlock = $("<div>");
        var textBlock = $("<textarea>");
        saveBtn = $("<button>");

        timeBlockRow.attr({
            class: "time-block d-flex bd-highlight p-3",
            id: "timeblock" + i
        });
        hourCol.attr("class", "p-2 bd-highlight col-md-3");
        textCol.attr("class", "p-2 bd-highlight col-md-7");
        saveCol.attr("class", "p-2 bd-highlight col-md-2");
        hourBlock.attr("class", "p-2 bd-highlight mt-2");
        textBlock.attr("class", "text col");
        saveBtn.html('<i class="far fa-calendar-plus"></i>');
        saveBtn.attr("class", "p-2 bd-highlight save-btn mb-2 mt-1 p-3");

        $(".container").append(timeBlockRow);
        hourBlock.text(hourText[i]);
        timeBlockRow.append(hourCol, textCol, saveCol);
        hourCol.append(hourBlock);
        textCol.append(textBlock);
        saveCol.append(saveBtn);
    }
}

blockSetup();

// setting text input into local storage
function setBtn(event) {
    for (var i = 0; i < hourText.length; i++) {
        saveBtn = $("<button>");
        saveBtn.attr("id", "button" + i);
        

    }
}
setBtn();