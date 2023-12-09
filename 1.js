
function printNumbersInReverse() {
    var numbers = [];

    for (var i = 0; i < 5; i++) {
        numbers[i] = prompt("Enter number " + (i+1) + ":");
    }

    console.log("The numbers in reverse order are:");
    for (var i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }
}

printNumbersInReverse();
