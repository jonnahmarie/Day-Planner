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

//dynamically setting up the HTML elements
function blockSetup() {
    for (var i = 0; i < hourText.length; i++) {
        var timeBlockRow = $("<div>");
        var hourCol = $("<div>");
        var textCol = $("<div>");
        var saveCol = $("<div>");
        var hourBlock = $("<div>");
        var p = $("<p>");
        var textBlock = $("<textarea>");
        var saveBtn = $("<button>");
        var hourValue = ["9","10","11","12","13","14","15","16","17"];

        timeBlockRow.attr({
            class: "time-block d-flex bd-highlight p-3 row",
            id: "timeblock" + i
        });
        hourCol.attr("class", "p-2 bd-highlight col-md-3 hour");
        textCol.attr("class", "p-2 bd-highlight col-md-7");
        saveCol.attr("class", "p-2 bd-highlight col-md-2");
        hourBlock.attr({
            class: "p-2 bd-highlight mt-2",
            id: "hourBlock" + i
        });
        textBlock.attr({
            class: "text col",
            id: "textBlock" + i,
            value: hourValue[i]
        });
        //gets local storage
        textBlock.text(localStorage.getItem(hourText[i]));

        saveBtn.html('<i class="far fa-calendar-plus"></i>');
        saveBtn.attr({
            class: "p-2 bd-highlight saveBtn mb-2 mt-1 p-3",
            id: "button" + i
        });

        $(".container").append(timeBlockRow);
        p.text(hourText[i]);
        hourBlock.append(p);
        timeBlockRow.append(hourCol, textCol, saveCol);
        hourCol.append(hourBlock);
        textCol.append(textBlock);
        saveCol.append(saveBtn);
        setStorage(i);
    };
};

blockSetup();
//set local storage
function setStorage(index) {
    $("#button" + index).on("click", function() {
        // console.log($("#textBlock0").val());
        localStorage.setItem($("#hourBlock" + index).text(), $("#textBlock" + index).val());
    })
};

//color coding blocks according to time (past, present, future)
let currentTime = moment().hour();
$("textarea").each(function(index) {
    var textHour = $("#textBlock" + index).attr("value");
    var textValue = parseInt(textHour);
    // console.log(textValue);

    if (textValue === currentTime) {
        $(this).addClass("text col present");
    } else if (textValue < currentTime) {
        $(this).addClass("text col past");
    } else {
        $(this).addClass("text col future");
    };
});