function finishOrder() {
    this.setupCSS();

    let totalPrice = 0;

    writeLineNoBreak("<h1>Café Weebmans</h1>");
    writeLine("<h4>Datum: " + getCurrentDate() + " " + getCurrentTime() + "</h4>");
    writeLineNoBreak("<hr>");


    // loopt door alle drink types
    for (let i = 0; i < drinkTypes.length; i++) {
        let drinkType = drinkTypes[i];

        // vraagt naar het aantal van het drankje
        let amount = drinks[drinkType];
        if (amount > 0) {
            writeLine("Aantal " + drinkType + ": " + amount);
            writeLine("Prijs per stuk: € " + prices[drinkType]);
            writeLine("Totaal: € " + (prices[drinkType] * amount).toFixed(2));
            totalPrice += prices[drinkType] * amount;

            writeLine("");
        }
    }

    // loopt door alle snack types
    for (let i = 0; i < snackTypes.length; i++) {
        let snackType = snackTypes[i];

        // vraagt naar het aantal van de snack
        let amount = snacks[snackType];
        if (amount > 0) {
            writeLine("Aantal Bitterballen (Schaal van " + snackType.replace("Bowl", "") + "): " + amount);
            writeLine("Prijs per stuk: € " + prices[snackType]);
            writeLine("Totaal: € " + (prices[snackType] * amount).toFixed(2));
            totalPrice += prices[snackType] * amount;

            writeLine("");
        }
    }
    totalPrice = totalPrice.toFixed(2);

    // schrijft het totaal
    writeLineNoBreak("------------------------------------------------------------------------------------------");
    writeLine("");
    writeLine("Subtotaal: € " + (totalPrice / 121 * 100).toFixed(2));
    writeLine("BTW (21%): € " + (totalPrice / 121 * 21).toFixed(2));
    writeLine("");
    writeLine("Totaal: € " + totalPrice);

    writeLine("");
}

function setupCSS() {
    var element = document.getElementById("kassabon");
    element.style.maxWidth = "500px";
    element.style.margin = "0 auto";
    element.style.border = "black 2px solid";
}