function updateLocalTime() {
    var phoneClock = document.getElementById('topBarLocalTime');

    var localTime = new Date();
    var localHours = localTime.getHours();
    var localMinutes = localTime.getMinutes();

    if (localHours < 10) {
        localHours = '0' + localHours;
    }

    if (localMinutes < 10) {
        localMinutes = '0' + localMinutes;
    }

    var localTimeString = localHours + ':' + localMinutes;

    phoneClock.innerText = localTimeString;
}

setInterval(updateLocalTime, 1000);
updateLocalTime();