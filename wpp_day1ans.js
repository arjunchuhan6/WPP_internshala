// Sample Output : Today is : Tuesday.
// Current time is : 10  : 30 : 38 PM
function printTime(){
    const date = new Date();
    let day = ["Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"];
    console.log(`Today is: ${day[date.getDay()]}`)
    console.log(`current time is: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}${date.getHours()>12?"PM":"AM"}`)
}
printTime();