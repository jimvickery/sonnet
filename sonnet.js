console.log("sonnet.js");

var sSonnet = document.getElementById('sonnet').innerText;

function findIndex() {
    var index = sSonnet.indexOf("orphans");
    console.log(index);
    var length = sSonnet.length;
    console.log(length);
    var winSwitch = sSonnet.replace("winter", " yuletide ");
    document.getElementById('sonnet').innerHTML = winSwitch.replace(/ the/gi, " a large ");
    document.getElementById('sonnet').innerHTML = winSwitch;




}

findIndex();


