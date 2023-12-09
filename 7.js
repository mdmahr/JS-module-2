
function rollDice(numberOfSides) {
    return Math.floor(Math.random() * numberOfSides) + 1;
}

function mainProgram() {

    var numberOfSides = parseInt(prompt("Enter the number of sides on the dice:"), 10);
    var result;
    var resultsHtml = "<ul>";

    do {
        result = rollDice(numberOfSides);
        resultsHtml += "<li>" + result + "</li>";
    } while (result !== numberOfSides);

    resultsHtml += "</ul>";

    document.write(resultsHtml);
}

mainProgram();
