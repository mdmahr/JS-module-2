
function printNumbersDescending() {
    var numbers = [];

    while (true) {
        var number = prompt("Enter a number (enter 0 to stop):");
        number = parseInt(number, 10);

        if (number === 0) {
            break;
        }

        numbers.push(number);
    }

    numbers.sort(function(a, b) { return b - a; });

    // Print the numbers to the console
    console.log("The numbers from largest to smallest are:");
    for (var i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

printNumbersDescending();
