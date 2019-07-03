
var googleSanFran = "https://www.google.com.sg/maps/place/San+Francisco,+CA,+USA/@37.7576948,-122.4726194,13z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155?hl=en"

var googleNewYork = "https://www.google.com.sg/maps/place/New+York,+NY,+USA/@40.6974034,-74.1197633,11z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en"

var googleLondon = "https://www.google.com.sg/maps/place/London,+UK/@51.5285582,-0.2416797,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583?hl=en"

var googleNapa = "https://www.google.com.sg/maps/place/Napa+Valley,+CA,+USA/@38.4297365,-122.5609137,11z/data=!3m1!4b1!4m5!3m4!1s0x808454f53baeb1ad:0x863a3784a09da6e3!8m2!3d38.4274315!4d-122.3943299?hl=en"

var googleSonoma = "https://www.google.com.sg/maps/place/Sonoma,+CA+95476,+USA/@38.291092,-122.4666091,14z/data=!3m1!4b1!4m5!3m4!1s0x8085ac43817b9d77:0x380ed210ee6e045!8m2!3d38.291859!4d-122.4580356?hl=en"


const funcNotReady = () => {
    alert(`This feature isn't done yet.`)
}

window.onload = function() {
    console.log('Page loaded');

    var clickFirstButton = document.getElementById('btn-guidebooks');
    var clickSecondButton = document.getElementById('btn-destinations');

//     Attach a click event listener to the See All Guidebooks button. Alert the user that this feature isn't done yet.
// Attach a click event listener to the See All Destinations button. Alert the user that this feature isn't done yet.
    clickFirstButton.addEventListener('click', funcNotReady);
    clickSecondButton.addEventListener('click', funcNotReady);

    // Attach a click event listener to each destination square. Inside the callback function, use window.open to trigger a new window with a google map page of that destination.
    var sanFran1 = document.getElementById('SF');
    var newYork = document.getElementById('NY');
    var london = document.getElementById('London');
    var napa = document.getElementById('Napa');
    var sonoma = document.getElementById('Sonoma');
    var sanFran2 = document.getElementById('SF2');

    sanFran1.addEventListener('click', function() {window.open(googleSanFran)});
    newYork.addEventListener('click', function() {window.open(googleNewYork)});
    london.addEventListener('click', function() {window.open(googleLondon)});
    napa.addEventListener('click', function() {window.open(googleNapa)});
    sonoma.addEventListener('click', function() {window.open(googleSonoma)});
    sanFran2.addEventListener('click', function() {window.open(googleSanFran)});

};