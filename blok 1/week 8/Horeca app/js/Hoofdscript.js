const drinks = {Bier: 0, Fris: 0, Wijn: 0};
const snacks = {Bowl8: 0, Bowl16: 0};

const prices = {Bier: 4.99, Fris: 2.49, Wijn: 2.49, Bowl8: 2.99, Bowl16: 5.70};


let drinkTypes = ["Bier", "Fris", "Wijn"];
let snackTypes = ["Bowl8", "Bowl16"];

order();

function order() {
    var orderName;

    // vraag voor order, Als er stop wordt gezegd gaat hij door naaar FinishOrder
    while ((orderName = prompt("Welke bestelling wilt u toevoegen?")) !== "stop") {
        if (orderName === null)
            continue;

        if (orderName.toLowerCase() === "snack" || orderName.toLowerCase() === "snacks") { // snacks
            this.orderSnack();
        } else { // drinks
            var canContinue = false;

            // loopt door drink types, als de value klopt kan de code doorgaan.
            for (let i = 0; i < drinkTypes.length; i++) {
                let drinkType = drinkTypes[i];

                if (orderName.toLowerCase() === drinkType.toLowerCase()) {
                    orderName = drinkType;
                    canContinue = true;
                }
            }

            if (!canContinue) {
                alert("Je kan alleen kiezen uit: bier, fris, wijn of snacks");
                continue;
            }

            this.orderDrink(orderName);
        }
    }

    finishOrder();
}

function orderDrink(drinkType) {
    let drinkAmount = integerPrompt("Hoeveel " + drinkType + " wilt u hebben?");
    if (drinkAmount > 0) {
        // voegt een aantal toe aan de value voor het specifieke drankje
        drinks[drinkType] += drinkAmount;
    }
}

function orderSnack() {
    let bowlSize = integerPrompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)");

    // loopt net zo lang totdat de bowlSize geen 8 en geen 16 is.
    while (true) {
        if (bowlSize === 8 || bowlSize === 16) {
            break;
        }
        alert("Je kunt alleen kiezen uit een schaal van 8 of 6 bitterballen");

        bowlSize = integerPrompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)");
    }

    let amount = integerPrompt("Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?");
    if (amount < 0)
        return;

    // voegt een aantal toe aan de value voor de specifieke schaal
    snacks["Bowl" + bowlSize] += amount;
}