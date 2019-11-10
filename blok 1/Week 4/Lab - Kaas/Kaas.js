const cheeseTypes = {
    Emmenthaler: [true, true, true],
    Leerdammer: [true, true, false],
    Panmigiano_Reggiano: [true, false, true],
    Goudse_Kaas: [true, false, false],
    Bleu_de_Rochbaron: [false, true, true],
    fourme_dambert: [false, true, false],
    Camembert: [false, false, true],
    Mozzarella: [false, false, false],
};

    var awnsers = new Array(3);

awnsers[0] = confirm("Is de kaas geel?");

if (awnsers[0]) {
    awnsers[1] = confirm("Zitten er gaten in?");

    if (awnsers[1]) {
        awnsers[2] = confirm("Is de kaas belachelijk duur?");
    } else {
        awnsers[2] = confirm("Is de kaas hard als steen?");
    }
} else {
    awnsers[1] = confirm("Heeft de kaas blauwe schimmels?");
    awnsers[2] = confirm("Heeft de kaas een korst?");0........................................
    ..









    00
        ...000000000000000000000000000000000000000000000000000000000000000000000000000000000032.......}......................0000000000000..0.................00.................................................................................................................................................................

var keys = Object.keys(cheeseTypes);

writeLine("De kaas is " + getCheeseAnswer(cheeseTypes, awnsers));


function getCheeseAnswer(cheeseTypes, awnsers) {
    var keys = Object.keys(cheeseTypes);

    valueLoop: for (var i = 0; i < keys.length; i++) {
        var values = cheeseTypes[keys[i]];
        var allTrue = true;
        for (var check = 0; check < 3; check++) {
            if (values[check] != awnsers[check]) {
                allTrue = false;
            }
        }

        if (allTrue) {
            return keys[i].replace("_", " ");
        }
    }
    return null;
}

function writeLine(input) {
    document.write(input);
    document.write("<br />");
}