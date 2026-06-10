let watchBox = document.querySelector("#watchBox");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

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
}
setInterval(clock, 1000);

clock();