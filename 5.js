
function printUniqueNumbersAscending() {
    var numbers = [];

    while (true) {
        var number = prompt("Enter a number:");
        number = parseInt(number, 10);

        if (numbers.indexOf(number) !== -1) {
            console.log("The number " + number + " has already been given.");
            break;
        }

        numbers.push(number);
    }

    numbers.sort(function(a, b) { return a - b; });

    console.log("The given numbers in ascending order are:");
    for (var i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

printUniqueNumbersAscending();
