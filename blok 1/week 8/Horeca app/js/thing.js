function integerPrompt(message) {
    var value;
    while (isNaN(value = parseInt(prompt(message)))) {
        alert("Je moet een getal invoeren.");
    }
    return value;
}

function writeLine(input) {
    document.getElementById("kassabon").innerHTML += input + "<br>";
}

function writeLineNoBreak(input) {
    document.getElementById("kassabon").innerHTML += input;
}

function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    return dd + '-' + mm + '-' + yyyy;
}

function getCurrentTime() {
    var today = new Date();
    var hh = today.getHours();
    var mm = today.getMinutes() + 1; //January is 0!
    var ss = today.getSeconds();

    return hh + ':' + mm + ':' + ss;
}