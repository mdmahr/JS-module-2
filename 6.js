
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function mainProgram() {
    var result;
    var resultsHtml = "<ul>";

    do {
        result = rollDice();
        resultsHtml += "<li>" + result + "</li>";
    } while (result !== 6);

    resultsHtml += "</ul>"; // Close the unordered list

    document.write(resultsHtml);
}

mainProgram();
