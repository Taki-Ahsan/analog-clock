let watchBox = document.querySelector("#watchBox");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let date = document.getElementById("date");
let day = document.getElementById("day");
let monthName = document.getElementById("monthName");
let monthNumber = document.getElementById("monthNumber");
let year = document.getElementById("year");

function numberToName(dayNum, monthNum){
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    monthName.textContent = monthNames[monthNum];
    day.textContent = dayName[dayNum];
}

function clock(){
    let timeDate = new Date();
    let hours = timeDate.getHours();
    let minutes = timeDate.getMinutes();
    let seconds = timeDate.getSeconds();
    let secondDegrees = (seconds * 6); 
    let minuteDegrees = (minutes * 6) + (seconds * 0.1); 
    let hourDegrees = ((hours % 12) * 30) + (minutes * 0.5); 
    second.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    minute.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    hour.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
    date.textContent = timeDate.getDate();
    numberToName(timeDate.getDay(), timeDate.getMonth());
    let correctMonthNumber = timeDate.getMonth() + 1;
    if(correctMonthNumber.toString().length == 1){
        monthNumber.textContent = "0" + correctMonthNumber;
    } else{
        monthNumber.textContent = correctMonthNumber;
    }
    year.textContent = timeDate.getFullYear();
}

setInterval(clock, 1000);

clock();