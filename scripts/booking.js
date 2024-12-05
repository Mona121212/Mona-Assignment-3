/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
// ********* Create Variables *********
// Variables
var dailyRate = 35;
var selectedDays = [];
var dayButtons = document.querySelectorAll(".day-selector li");
var calculatedCostElement = document.getElementById("calculated-cost");
var clearButton = document.getElementById("clear-button");
var fullDayButton = document.getElementById("full");
var halfDayButton = document.getElementById("half");

Array.prototype.forEach.call(dayButtons, function(dayButton) {
    dayButton.addEventListener("click", function() {
        if (!dayButton.classList.contains("clicked")) {
            dayButton.classList.add("clicked");
            selectedDays.push(dayButton.id);
        } else {
            dayButton.classList.remove("clicked");
            selectedDays = selectedDays.filter(function(day) {
                return day !== dayButton.id;
            });
        }
        calculateCost();
    });
});

clearButton.addEventListener("click", function() {
    selectedDays = [];
    Array.prototype.forEach.call(dayButtons, function(dayButton) {
        dayButton.classList.remove("clicked");
    });
    calculatedCostElement.innerHTML = "0";
});

fullDayButton.addEventListener("click", function() {
    dailyRate = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculateCost();
});

halfDayButton.addEventListener("click", function() {
    dailyRate = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculateCost();
});

function calculateCost() {
    var totalCost = selectedDays.length * dailyRate;
    calculatedCostElement.innerHTML = totalCost;
}

