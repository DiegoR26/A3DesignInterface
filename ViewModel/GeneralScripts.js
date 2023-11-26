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

function alertLocation() {
    document.getElementById('modalLocation').style.display = 'flex';
}
function closeLocation() {
    document.getElementById('modalLocation').style.display = 'none';
}
function alertShare() {
    document.getElementById('modalShare').style.display = 'flex';
}
function closeShare() {
    document.getElementById('modalShare').style.display = 'none';
}
function alertSystem() {
    document.getElementById('modalSystem').style.display = 'flex';
}
function closeSystem() {
    document.getElementById('modalSystem').style.display = 'none';
}
function alertTag() {
    document.getElementById('modalTag').style.display = 'flex';
}
function closeTag() {
    document.getElementById('modalTag').style.display = 'none';
}
function alertCheckOn() {
    document.getElementById('modalCheckOn').style.display = 'flex';
}
function closeCheckOn() {
    document.getElementById('modalCheckOn').style.display = 'none';
}
function alertText() {
    document.getElementById('modalText').style.display = 'flex';
}
function closeText() {
    document.getElementById('modalText').style.display = 'none';
}

function Navigate(url) {
    window.location.href = url;
}