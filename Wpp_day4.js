// write a javascript program to calculate the days left for christmas
const today = new Date();
//Creating a date object for christmas of the current year
var christmasday = new Date(today.getFullYear(), 11, 25);
//Checking if the current date is after December 25th
if(today.getMonth()==11 && today.getDate()>25) {
    christmasday.setFullYear(christmasday.getFullYear() + 1);
}
//Calculate the difference in days between today and christmas
var one_day = 1000 * 60 * 60 * 24;
//Print the number of days left until christmas
console.log(Math.ceil((christmasday.getTime() - today.getTime()) / (one_day)) + " " + "days left for christmas!");