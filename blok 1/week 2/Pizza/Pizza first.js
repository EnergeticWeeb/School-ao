<!DOCTYPE HTML>
<html lang="nl">
<head>
    <p>Pizzas bestellen:</p>
</head>

<body>
<script>
    //Martijn Kooman
    //Applicatie Ontwikkelaar
    //Opdracht pizza calculator

    const prices = {Small:2.35, Medium:3.99, Large:5.99}; // dit zijn de prijzen van de pizzas

    // dit vraagt hoeveel pizza's van elke grootte er gewenst zijn
    var smallAmount = parseInt(prompt("Hoeveel kleine pizzas wilt u bestellen ?"));
    var mediumAmount = parseInt(prompt("Hoeveel medium pizzas wilt u bestellen?"));
    var largeAmount = parseInt(prompt("Hoeveel grote pizzas wilt u bestellen?"));

    // als het veld niet ingevuld is veranderd hij de waarde naar 0 ipv isNaN
    if (isNaN(smallAmount)) smallAmount = 0;
    if (isNaN(mediumAmount)) mediumAmount = 0;
    if (isNaN(largeAmount)) largeAmount = 0;


    //rekent de totale prijs uit van alle pizzas
    var totalPrice = smallAmount * prices.Small + mediumAmount * prices.Medium + largeAmount * prices.Large;

    writeLine("Aantal kleine pizzas: " + smallAmount);
    writeLine("Prijs per stuk: " + prices.Small);
    writeLine("Totaal kleine pizzas: " + (smallAmount * prices.Small).toFixed(2));
    writeLine("");

    writeLine("Aantal medium pizzas: " + mediumAmount);
    writeLine("Prijs per stuk: " + prices.Medium);
    writeLine("Totaal medium pizzas: " + (mediumAmount * prices.Medium).toFixed(2));
    writeLine("");

    writeLine("Aantal grote pizzas: " + largeAmount);
    writeLine("Prijs per stuk: " + prices.Large);
    writeLine("Totaal large pizzas: " + (largeAmount * prices.Large).toFixed(2));
    writeLine("");
    writeLine("----------------");
    writeLine("");
    writeLine("Sub totaal: " + (totalPrice / 106 * 100).toFixed(2)); // voegt BTW toe, over pizza's zit
    writeLine("BTW (6%): " + (totalPrice / 106 * 6).toFixed(2));
    writeLine("");
    writeLine("Totaal: " + totalPrice.toFixed(2));


    //maakt een line die gelijk erna naar de volgende regel gaat, zodat alles netjes onder elkaar staat
    function writeLine(input) {
    document.write(input);
    document.write("<br />");
}
</script>
</body>
</html>