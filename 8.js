
function concat(array) {
    var result = '';

    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }

    return result;
}

var names = ["Johnny", "DeeDee", "Joey", "Marky"];

var concatenatedString = concat(names);
document.write(concatenatedString);
