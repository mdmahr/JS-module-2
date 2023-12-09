
function even(array) {
    var evenNumbers = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
        }
    }

    return evenNumbers;
}


var numbers = [2, 7, 4];


var evenNumbers = even(numbers);

console.log("Original array: " + numbers);
console.log("Even numbers array: " + evenNumbers);
