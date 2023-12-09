
function printDogNames() {
    var dogNames = [];

    for (var i = 0; i < 6; i++) {
        dogNames.push(prompt("Enter the name of dog " + (i+1) + ":"));
    }

    dogNames.sort().reverse();

    var dogNamesHtml = "<ul>";

    for (var i = 0; i < dogNames.length; i++) {
        dogNamesHtml += "<li>" + dogNames[i] + "</li>";
    }

    dogNamesHtml += "</ul>";

    document.write(dogNamesHtml);
}

printDogNames();
