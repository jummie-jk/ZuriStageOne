document.addEventListener("DOMContentLoaded", function () {
    const dayOfWeekElement = document.getElementById("currentDayOfTheWeek");
    const timeElement = document.getElementById("currentTime");
    const millisecondElement = document.getElementById("currentMilliseconds");
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    

    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    dayOfWeekElement.textContent = `: ${currentDayOfWeek}`;
  
    const currentUTCMilliseconds = currentDate.getTime();
    

    timeElement.textContent = `Current UTC Time: ${currentUTCMilliseconds}`;
    millisecondElement.textContent = `Milliseconds: ${currentDate.getUTCMilliseconds()}`;
});

